<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BlogPost extends Model
{
    use HasFactory;
    
    protected $fillable = ['title','content','is_anonymous','pathImage','category_id'];


    public function comments() : BelongsTo
    {
        return $this->belongsTo(Comment::class);
    }
    
    public function user(): BelongsTo 
    {
        return $this->belongsTo(User::class);
    }

    public function category(): BelongsTo 
    {
        return $this->belongsTo(Category::class);
    }
}
