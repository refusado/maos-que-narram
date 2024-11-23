<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = ['story_id', 'question_text'];

    public function story()
    {
        return $this->belongsTo(Story::class);
    }

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }
}

