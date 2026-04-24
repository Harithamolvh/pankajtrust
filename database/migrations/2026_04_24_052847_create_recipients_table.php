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
        Schema::create('recipients', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150);
            $table->smallInteger('year');
            $table->foreignId('school_id')->constrained('schools');
            $table->enum('district', ['ernakulam', 'idukki']);
            $table->string('course', 100);
            $table->enum('course_type', ['3year', '4year']);
            $table->string('college', 150);
            $table->string('photo', 255)->nullable();
            $table->text('bio')->nullable();
            $table->decimal('academic_score', 5, 2)->nullable();
            $table->decimal('need_score', 5, 2)->nullable();
            $table->enum('status', ['active', 'completed', 'withdrawn'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recipients');
    }
};
