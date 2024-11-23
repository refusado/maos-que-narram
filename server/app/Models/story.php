<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'category', 'description', 'video_url'];

    public function questions()
    {
        return $this->hasMany(Question::class);
    }
}
