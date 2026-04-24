<?php

namespace App\Http\Requests\Admin;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateSchoolRequest extends FormRequest
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
            'name' => 'required|string|max:200',
            'district' => 'required|in:ernakulam,idukki',
            'address' => 'nullable|string',
            'type' => 'required|in:government,aided,private',
            'contact_person' => 'nullable|string|max:100',
            'contact_email' => 'nullable|email|max:150',
            'contact_phone' => 'nullable|string|max:20',
            'active' => 'boolean',
        ];
    }
}
