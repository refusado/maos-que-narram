<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('story_id');
            $table->text('question_text'); // Texto da pergunta
            $table->timestamps();

            // Relacionamento com stories
            $table->foreign('story_id')->references('id')->on('stories')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('questions');
    }
}
