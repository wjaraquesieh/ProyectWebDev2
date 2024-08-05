<?php

namespace App\Http\Controllers;

use App\Models\Veterinarian;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\VeterinarianResource;

class VeterinarianController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Veterinarian/Index');
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
            'email' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'days_open' => 'required|string|max:255',
            'opening_hours' => 'required|string|max:255',
        ]);

        Veterinarian::create($validatedData);

        return back()->with('status', 'Veterinarian created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Veterinarian $veterinarian)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Veterinarian $veterinarian)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Veterinarian $veterinarian)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Veterinarian $veterinarian)
    {
        //
    }
}
