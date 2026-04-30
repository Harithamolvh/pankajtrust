<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRecipientRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:150',
            'start_year' => 'required|integer|min:1999|max:' . date('Y'),
            'ref_school_id' => 'nullable|exists:ref_schools,id',
            'ref_college_id' => 'nullable|exists:ref_colleges,id',
            'ref_course_id' => 'nullable|exists:ref_courses,id',
            'duration' => 'nullable|numeric|min:0|max:10',
            'remarks' => 'nullable|string|max:1000',
            'active' => 'required|boolean',
            'photo' => 'nullable|image|max:2048',
        ];
    }
}
