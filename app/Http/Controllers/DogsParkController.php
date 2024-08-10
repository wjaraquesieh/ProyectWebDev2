<?php

namespace App\Http\Controllers;

use App\Models\DogsPark;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\DogsParkResource;

class DogsParkController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dogsParks = DogsPark::latest()->get();

        return Inertia::render('DogsPark/Index', [
            'dogsParks' => DogsParkResource::collection($dogsParks)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'opening_hours' => 'required|string|max:255',
            'has_water_fountain' => 'required|boolean',
        ]);

        DogsPark::create($validatedData);

        return back()->with('status', 'Dog Park created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(DogsPark $dogsPark)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DogsPark $dogsPark)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DogsPark $dogsPark)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'opening_hours' => 'required|string|max:255',
            'has_water_fountain' => 'required|boolean',
        ]);

        $dogsPark->update($validatedData);

        return back()->with('status', 'Dog Park updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DogsPark $dogsPark)
    {
        $dogsPark->delete(); 

        return back()->with('status', 'Dog Park deleted!');
    }
}
