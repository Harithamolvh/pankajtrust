<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('scholarship_applications', function (Blueprint $table) {
            $table->uuid('id')->primary();
            
            // Student Details
            $table->string('student_name');
            $table->string('student_phone');
            $table->string('student_email')->nullable();
            $table->string('school_name');
            $table->string('course_name');
            
            // Referral Details (Principal/Referrer)
            $table->string('referrer_name');
            $table->string('referrer_phone');
            $table->string('referrer_designation')->nullable(); // Principal, Teacher, etc.
            $table->text('referrer_remarks')->nullable();
            
            // Tracking
            $table->string('status')->default('pending')->comment('pending, approved, rejected');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('scholarship_applications');
    }
};
