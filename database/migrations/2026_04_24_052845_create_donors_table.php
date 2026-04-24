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
        Schema::create('donors', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150);
            $table->string('relationship', 100);
            $table->enum('contribution_type', ['capital', 'annual', 'one-time']);
            $table->decimal('amount', 12, 2)->nullable();
            $table->smallInteger('year')->nullable();
            $table->text('description')->nullable();
            $table->boolean('display_publicly')->default(true);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donors');
    }
};
