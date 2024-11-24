<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    use HasFactory;

    protected $fillable = ['slug', 'title', 'youtube_video_id', 'description', 'category', 'duration'];

    public function questions()
    {
        return $this->hasMany(Question::class);
    }
}
