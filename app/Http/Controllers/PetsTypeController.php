<?php

namespace App\Http\Controllers;

use App\Models\PetsType;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\PetsTypeResource;

class PetsTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $petsType = PetsType::latest()->get();

        return Inertia::render('Maintainers/PetsType/Index', [
            'petsType' => PetsTypeResource::collection($petsType)
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
        ]);
        PetsType::create($validatedData);

        return back()->with('status', 'Pets Type created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(PetsType $petsType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PetsType $petsType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PetsType $petsType)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
        ]);
        PetsType::update($validatedData);

        return back()->with('status', 'Pets Type updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PetsType $petsType)
    {
        //$this->authorize('delete', $petsType);

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        PetsType::delete($validatedData);

        return back()->with('status', 'Pets Type deleted successfully');
    }
}
