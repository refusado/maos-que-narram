<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = ['story_id', 'question', 'options'];

    protected $casts = [
        'options' => 'array', // Define que o campo será tratado como array
    ];
}
