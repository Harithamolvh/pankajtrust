<?php

namespace App\Http\Requests\Admin;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateDonorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:150',
            'relationship' => 'required|string|max:100',
            'contribution_type' => 'required|in:capital,annual,one-time',
            'amount' => 'nullable|numeric|min:0',
            'year' => 'nullable|integer|min:1999|max:' . (date('Y') + 1),
            'description' => 'nullable|string',
            'display_publicly' => 'boolean',
        ];
    }
}
