<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('meetings', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('year_id')->nullable()->constrained('ref_academic_years')->nullOnDelete();
            $table->string('name');
            $table->dateTime('date');
            $table->string('district', 50)->nullable();
            $table->text('minutes')->nullable();
            $table->text('agenda')->nullable();
            $table->string('venue')->nullable();
            $table->string('venue_type')->nullable()->comment('e.g., school, hall');
            $table->boolean('is_distribution')->default(false)->comment('Defines if the meeting held is for scholarship distribution');
            $table->timestamps();
            $table->softDeletes();
            $table->string('delete_reason')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meetings');
    }
};
