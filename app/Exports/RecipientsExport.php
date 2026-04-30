<?php

namespace App\Exports;

use App\Models\StdRecipient;
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
        $query = StdRecipient::with(['refSchool', 'refCollege', 'refCourse']);

        if (!empty($this->filters['search'])) {
            $search = $this->filters['search'];
            $query->where('name', 'like', "%{$search}%");
        }
        if (!empty($this->filters['year'])) {
            $query->where('start_year', $this->filters['year']);
        }
        if (!empty($this->filters['school_id'])) {
            $query->where('ref_school_id', $this->filters['school_id']);
        }
        if (isset($this->filters['status']) && $this->filters['status'] !== '') {
            $query->where('active', $this->filters['status'] === 'active');
        }

        return $query;
    }

    public function headings(): array
    {
        return [
            'ID',
            'Name',
            'Start Year',
            'School',
            'College',
            'Course',
            'Duration',
            'Status',
            'Remarks',
            'Inactive Reason',
            'Inactive From',
            'Created At',
        ];
    }

    public function map($recipient): array
    {
        return [
            $recipient->id,
            $recipient->name,
            $recipient->start_year,
            $recipient->refSchool ? $recipient->refSchool->name : '',
            $recipient->refCollege ? $recipient->refCollege->name : '',
            $recipient->refCourse ? $recipient->refCourse->name : '',
            $recipient->duration,
            $recipient->active ? 'Active' : 'Inactive',
            $recipient->remarks,
            $recipient->inactive_reason,
            $recipient->inactive_from ? $recipient->inactive_from->format('Y-m-d') : '',
            $recipient->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
