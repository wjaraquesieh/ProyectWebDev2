<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DogsPark extends Model
{
    use HasFactory;
    
    protected $fillable = ['name','address','opening_hours','has_water_fountain'];
}
