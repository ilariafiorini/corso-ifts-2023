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
        Schema::create('books', function (Blueprint $table) {

            // - id
            // - title VARCHAR(100)
            // - num_pages INTEGER
            // - abstract VARCHAR(255)
            // - editor_id UNSIGNED BIG INTEGER, Foreign Key su tabella editors
            // - author_id UNSIGNED BIG INTEGER, Foreign Key su tabella authors

            $table->id();
            $table->char('title', 100);
            $table->integer('num_pages');
            $table->char('abstract', 255);
            $table->unsignedBigInteger('editor_id');
            $table->foreign('editor_id')->references('id')->on('editors');
            $table->unsignedBigInteger('author_id');
            $table->foreign('author_id')->references('id')->on('authors');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
