<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // 1. std_invites
        Schema::create('std_invites', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->foreignUuid('user_id')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignUuid('ref_school_id')->nullable()->constrained('ref_schools')->nullOnDelete();
            $table->foreignUuid('ref_academic_year_id')->nullable()->constrained('ref_academic_years')->nullOnDelete();
            $table->foreignUuid('referred_by_id')->nullable()->constrained('trustees')->nullOnDelete();
            $table->string('phone', 20)->nullable();
            $table->string('email')->nullable();
            $table->boolean('need_otp')->default(false);
            $table->integer('appl_status')->default(5);
            $table->boolean('cancelled')->default(false);
            $table->string('cancel_reason')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        // 2. std_applications
        Schema::create('std_applications', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('invite_id')->constrained('std_invites')->cascadeOnDelete();
            $table->string('name');
            $table->string('gender', 10)->nullable();
            $table->date('dob')->nullable();
            $table->string('phone', 20)->nullable();
            $table->string('email')->nullable();
            $table->text('address')->nullable();
            $table->string('landmark')->nullable();
            $table->text('route')->nullable();
            
            // Academics
            $table->decimal('mark_sslc', 5, 2)->nullable();
            $table->decimal('mark_p1', 5, 2)->nullable();
            $table->decimal('mark_p2', 5, 2)->nullable();
            $table->string('reg_no')->nullable();
            
            // Preferences
            $table->foreignUuid('preferred_college_id')->nullable()->constrained('ref_colleges')->nullOnDelete();
            $table->foreignUuid('preferred_course_id')->nullable()->constrained('ref_courses')->nullOnDelete();
            
            // Locational Lookups
            $table->foreignUuid('ref_district_id')->nullable()->constrained('ref_districts')->nullOnDelete();
            $table->foreignUuid('ref_area_id')->nullable()->constrained('ref_areas')->nullOnDelete();
            
            // Housing Lookups
            $table->foreignUuid('ref_house_ownership_id')->nullable()->constrained('ref_house_ownerships')->nullOnDelete();
            $table->foreignUuid('ref_house_roof_id')->nullable()->constrained('ref_house_roofs')->nullOnDelete();
            $table->foreignUuid('ref_drinking_water_id')->nullable()->constrained('ref_drinking_waters')->nullOnDelete();
            $table->decimal('house_land_size', 8, 2)->nullable();
            
            // Flattened Bank Details
            $table->json('bank_details')->nullable();
            
            // Flags
            $table->boolean('parent_acknowledgement')->default(false);
            $table->boolean('student_signature')->default(false);
            $table->boolean('school_approval')->default(false);

            $table->timestamps();
            $table->softDeletes();
        });

        // 3. std_recipients
        Schema::create('std_recipients', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('application_id')->nullable()->constrained('std_applications')->nullOnDelete();
            $table->string('name');
            $table->integer('start_year')->nullable();
            $table->foreignUuid('ref_school_id')->nullable()->constrained('ref_schools')->nullOnDelete();
            $table->foreignUuid('ref_college_id')->nullable()->constrained('ref_colleges')->nullOnDelete();
            $table->foreignUuid('ref_course_id')->nullable()->constrained('ref_courses')->nullOnDelete();
            $table->decimal('duration', 4, 2)->nullable();
            $table->string('remarks')->nullable();
            $table->boolean('active')->default(true);
            $table->dateTime('inactive_from')->nullable();
            $table->string('inactive_reason')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        // 4. std_appl_relatives
        Schema::create('std_appl_relatives', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('application_id')->constrained('std_applications')->cascadeOnDelete();
            $table->string('name');
            $table->string('relation_category', 50)->comment('Parent, Sibling, Contact');
            $table->string('relation_name', 50)->nullable()->comment('Father, Brother, Neighbor, etc');
            $table->string('phone', 20)->nullable();
            $table->string('email')->nullable();
            $table->date('dob')->nullable();
            $table->string('highest_qualification')->nullable();
            $table->string('occupation')->nullable();
            $table->decimal('income', 10, 2)->default(0);
            $table->boolean('alive')->default(true);
            $table->boolean('disabled')->default(false);
            $table->text('comments')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        // 5. std_appl_achievements
        Schema::create('std_appl_achievements', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('application_id')->constrained('std_applications')->cascadeOnDelete();
            $table->string('title');
            $table->text('description')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        // 6. std_appl_statuses
        Schema::create('std_appl_statuses', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('application_id')->constrained('std_applications')->cascadeOnDelete();
            $table->boolean('status')->default(true);
            $table->string('reason')->nullable();
            $table->text('comments')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('std_appl_statuses');
        Schema::dropIfExists('std_appl_achievements');
        Schema::dropIfExists('std_appl_relatives');
        Schema::dropIfExists('std_recipients');
        Schema::dropIfExists('std_applications');
        Schema::dropIfExists('std_invites');
    }
};
