<?php

namespace App\Helpers;

use Illuminate\Http\JsonResponse;

class Resp
{
    /**
     * Return a standardized JSON success response.
     */
    public static function success(string $message = 'Success', $data = null, int $code = 100, array $misc = [], array $errors = [], int $httpStatus = 200): JsonResponse
    {
        // Automatically extract pagination metadata into 'misc' to keep 'data' clean
        if (($data instanceof \Illuminate\Contracts\Pagination\Paginator || $data instanceof \Illuminate\Contracts\Pagination\CursorPaginator) && method_exists($data, 'toArray')) {
            $paginatedArray = $data->toArray();
            $data = $paginatedArray['data'] ?? [];
            unset($paginatedArray['data']);
            $misc['pagination'] = $paginatedArray;
        } elseif (\is_array($data) && isset($data['data']) && isset($data['current_page'])) {
            $paginatedArray = $data;
            $data = $paginatedArray['data'];
            unset($paginatedArray['data']);
            $misc['pagination'] = $paginatedArray;
        }

        return response()->json([
            'status'  => true,
            'message' => $message,
            'code'    => $code,
            'data'    => $data,
            'misc'    => empty($misc) ? null : $misc,
            'errors'  => empty($errors) ? null : $errors,
        ], $httpStatus);
    }

    /**
     * Return a standardized JSON error response.
     */
    public static function error(string $message = 'Error', int $code = 300, $data = null, array $errors = [], int $httpStatus = 400): JsonResponse
    {
        return response()->json([
            'status'  => false,
            'message' => $message,
            'code'    => $code,
            'data'    => $data,
            'misc'    => null,
            'errors'  => empty($errors) ? null : $errors,
        ], $httpStatus);
    }

    /**
     * Return a standardized JSON validation error response.
     */
    public static function validationError(array $errors, string $message = 'Validation failed'): JsonResponse
    {
        return self::error($message, 201, null, $errors, 422);
    }
}
