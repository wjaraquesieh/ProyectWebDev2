<?php

namespace App\Http\Controllers;

use App\Models\AdoptionShelter;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\AdoptionShelterResource;

class AdoptionShelterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $adoptionShelters = AdoptionShelter::latest()->get();

        return Inertia::render('AdoptionShelter/Index', [
            'adoptionShelters' => AdoptionShelterResource::collection($adoptionShelters)
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
            'email' => 'string|max:255',
            'phone' => 'required|string|max:255',
            'link' => 'string|max:255',
            'days_open' => 'required|string|max:255',
            'opening_hours' => 'required|string|max:255',
        ]);

        AdoptionShelter::create($validatedData);

        return back()->with('status', 'Shelter created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(AdoptionShelter $adoptionShelter)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AdoptionShelter $adoptionShelter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, AdoptionShelter $adoptionShelter)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'email' => 'string|max:255',
            'phone' => 'required|string|max:255',
            'link' => 'string|max:255',
            'days_open' => 'required|string|max:255',
            'opening_hours' => 'required|string|max:255',
        ]);

        $adoptionShelter->update($validatedData);

        return back()->with('status', 'Shelter updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AdoptionShelter $adoptionShelter)
    {
        $adoptionShelter->delete(); 

        return back()->with('status', 'Shelter deleted!');
    }
}
