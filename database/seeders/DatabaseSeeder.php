<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@pankajtrust.org',
            'password' => bcrypt('password'),
            'is_admin' => true,
        ]);

        $settings = [
            ['key' => 'hero_headline', 'group' => 'hero', 'label' => 'Hero Headline', 'value' => 'Turning Potential Into Possibility'],
            ['key' => 'hero_subtext', 'group' => 'hero', 'label' => 'Hero Subtext', 'value' => 'Empowering bright, financially disadvantaged students in Kerala to achieve university education since 1999.'],
            ['key' => 'hero_cta_primary', 'group' => 'hero', 'label' => 'Primary CTA', 'value' => 'Explore Scholarships'],
            ['key' => 'hero_cta_secondary', 'group' => 'hero', 'label' => 'Secondary CTA', 'value' => 'Support a Student'],
            ['key' => 'stat_students_supported', 'group' => 'stats', 'label' => 'Students Supported', 'value' => '700+'],
            ['key' => 'stat_schools', 'group' => 'stats', 'label' => 'Partner Schools', 'value' => '16'],
            ['key' => 'stat_years_active', 'group' => 'stats', 'label' => 'Years Active', 'value' => '25'],
            ['key' => 'stat_districts', 'group' => 'stats', 'label' => 'Districts Covered', 'value' => '2'],
            ['key' => 'stat_active_scholars', 'group' => 'stats', 'label' => 'Active Scholars', 'value' => '40–50'],
            ['key' => 'trust_established', 'group' => 'about', 'label' => 'Established Date', 'value' => 'April 1999'],
            ['key' => 'trust_inaugurated', 'group' => 'about', 'label' => 'Inauguration Details', 'value' => "August 1999, Maharaja's College, Ernakulam"],
            ['key' => 'founder_name', 'group' => 'about', 'label' => 'Founder Name', 'value' => 'Dr. Thampil Pankaj'],
            ['key' => 'founder_short_bio', 'group' => 'about', 'label' => 'Founder Short Bio', 'value' => 'A distinguished economist who served at the United Nations (UNCTAD, Geneva) and the World Bank (Washington D.C.) for 25 years, retiring as Principal Economist, South Asia Region.'],
            ['key' => 'corpus_amount', 'group' => 'about', 'label' => 'Corpus Amount', 'value' => '₹32 lakhs'],
            ['key' => 'annual_expenditure', 'group' => 'about', 'label' => 'Annual Expenditure', 'value' => '₹4 lakhs+'],
            ['key' => 'scholarship_3year', 'group' => 'scholarship', 'label' => '3-Year Course Amount', 'value' => '₹8,000 per year'],
            ['key' => 'scholarship_4year', 'group' => 'scholarship', 'label' => '4-Year Course Amount', 'value' => '₹10,000 per year'],
            ['key' => 'donate_bank_name', 'group' => 'donate', 'label' => 'Bank Name', 'value' => ''],
            ['key' => 'donate_account_number', 'group' => 'donate', 'label' => 'Account Number', 'value' => ''],
            ['key' => 'donate_ifsc', 'group' => 'donate', 'label' => 'IFSC Code', 'value' => ''],
            ['key' => 'donate_upi', 'group' => 'donate', 'label' => 'UPI ID', 'value' => ''],
            ['key' => 'donate_80g_note', 'group' => 'donate', 'label' => '80G Note', 'value' => 'Donations to this Trust are eligible for tax deduction under Section 80G of the Income Tax Act, 1961.'],
            ['key' => 'contact_email', 'group' => 'contact', 'label' => 'Email Address', 'value' => 'info@pankajtrust.org'],
            ['key' => 'contact_phone', 'group' => 'contact', 'label' => 'Phone Number', 'value' => '+91 98765 43210'],
            ['key' => 'contact_address', 'group' => 'contact', 'label' => 'Physical Address', 'value' => 'Ernakulam, Kerala, India'],
        ];

        foreach ($settings as $setting) {
            \App\Models\SiteSetting::create($setting);
        }

        $school1 = \App\Models\School::create([
            'name' => 'Govt. Higher Secondary School, Maradu',
            'district' => 'ernakulam',
            'type' => 'government',
            'active' => true,
        ]);

        \App\Models\Recipient::create([
            'name' => 'Adithya K',
            'year' => 2024,
            'school_id' => $school1->id,
            'district' => 'ernakulam',
            'course' => 'B.Sc Computer Science',
            'course_type' => '3year',
            'college' => 'Sacred Heart College',
            'status' => 'active',
        ]);
    }
}
