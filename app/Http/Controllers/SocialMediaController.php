<?php

namespace App\Http\Controllers;

use App\Models\SocialMedia;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\SocialMediaResource;

class SocialMediaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $socialMedia = SocialMedia::latest()->get();

        return Inertia::render('Maintainers/SocialMedia/Index', [
            'socialMedia' => SocialMediaResource::collection($socialMedia)
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
        SocialMedia::create($validatedData);

        return back()->with('status', 'Social Media created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(SocialMedia $socialMedia)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SocialMedia $socialMedia)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SocialMedia $socialMedia)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
        ]);
        SocialMedia::update($validatedData);

        return back()->with('status', 'Social Media updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SocialMedia $socialMedia)
    {
        //$this->authorize('delete', $category);

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        SocialMedia::delete($validatedData);

        return back()->with('status', 'Social Media deleted successfully');
    }
}
