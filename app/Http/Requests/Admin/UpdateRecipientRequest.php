<?php

namespace App\Http\Requests\Admin;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateRecipientRequest extends FormRequest
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
            'year' => 'required|integer|min:1999|max:' . date('Y'),
            'school_id' => 'required|exists:schools,id',
            'district' => 'required|in:ernakulam,idukki',
            'course' => 'required|string|max:100',
            'course_type' => 'required|in:3year,4year',
            'college' => 'required|string|max:150',
            'photo' => 'nullable|image|max:2048',
            'bio' => 'nullable|string|max:300',
            'academic_score' => 'nullable|numeric|min:0|max:50',
            'need_score' => 'nullable|numeric|min:0|max:50',
            'status' => 'required|in:active,completed,withdrawn',
        ];
    }
}
