<?php

namespace App\Http\Requests\Admin;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateMeetingRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'date' => 'required|date',
            'minutes' => 'nullable|string',
            'agenda' => 'nullable|string',
            'venue' => 'nullable|string|max:255',
            'venue_type' => 'nullable|string|max:255',
            'is_distribution' => 'boolean',
            'attendees' => 'nullable|array',
            'attendees.*' => 'exists:users,id',
            'gallery_images' => 'nullable|array',
            'gallery_images.*' => 'image|mimes:jpg,jpeg,png,webp|max:5120', // 5MB max
        ];
    }
}
