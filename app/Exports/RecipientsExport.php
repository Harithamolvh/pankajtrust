<?php

namespace App\Exports;

use App\Models\Recipient;
use Maatwebsite\Excel\Concerns\FromCollection;

use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class RecipientsExport implements FromQuery, WithHeadings, WithMapping
{
    use Exportable;

    protected $filters;

    public function __construct(array $filters = [])
    {
        $this->filters = $filters;
    }

    public function query()
    {
        $query = Recipient::with('school');

        if (!empty($this->filters['search'])) {
            $search = $this->filters['search'];
            $query->where('name', 'like', "%{$search}%");
        }
        if (!empty($this->filters['year'])) {
            $query->where('year', $this->filters['year']);
        }
        if (!empty($this->filters['district'])) {
            $query->where('district', $this->filters['district']);
        }
        if (!empty($this->filters['school_id'])) {
            $query->where('school_id', $this->filters['school_id']);
        }
        if (!empty($this->filters['status'])) {
            $query->where('status', $this->filters['status']);
        }
        if (!empty($this->filters['course_type'])) {
            $query->where('course_type', $this->filters['course_type']);
        }

        return $query;
    }

    public function headings(): array
    {
        return [
            'ID',
            'Name',
            'Year',
            'School',
            'District',
            'Course',
            'Course Type',
            'College',
            'Academic Score',
            'Need Score',
            'Status',
            'Created At',
        ];
    }

    public function map($recipient): array
    {
        return [
            $recipient->id,
            $recipient->name,
            $recipient->year,
            $recipient->school ? $recipient->school->name : '',
            ucfirst($recipient->district),
            $recipient->course,
            $recipient->course_type,
            $recipient->college,
            $recipient->academic_score,
            $recipient->need_score,
            ucfirst($recipient->status),
            $recipient->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
