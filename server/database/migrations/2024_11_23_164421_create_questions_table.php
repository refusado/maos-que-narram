<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionsTable extends Migration
{
    public function up()
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('story_id')->constrained('stories')->onDelete('cascade');
            $table->text('question');
            $table->json('options'); // As opções serão armazenadas como JSON
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('questions');
    }
}
