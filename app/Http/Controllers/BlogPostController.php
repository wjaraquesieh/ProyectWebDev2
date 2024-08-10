<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\BlogPost;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\BlogPostResource;
use App\Http\Resources\CategoryResource;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class BlogPostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogPost = BlogPost::with(['user', 'category'])->get();
        $categories = Category::get();

        return Inertia::render('BlogPost/Index', [
            'blogPosts' => BlogPostResource::collection($blogPost),
            'categories' => CategoryResource::collection($categories)
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
        try {
            // dd($request);
            $validatedData = $request->validate([
                'title' => 'required|string|max:255',
                'content' => 'required|string|max:15000',
                'is_anonymous' => 'required|boolean',
                'category_id' => 'required|int',
                'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            ]);
            
            if ($request->hasFile('image')) {
                $path = $request->file('image')->store('public/blog_images');
                $validatedData['pathImage'] = $path;
            }
    
            $request->user()->blogPost()->create($validatedData);
    
            return back()->with('status', 'Post created successfully');
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(BlogPost $blogPost)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BlogPost $blogPost)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BlogPost $blogPost)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string|max:20000',
            'is_anonymous' => 'required|boolean',
            'category_id' => 'required|int',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);
        
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('public/blog_images');
            $validatedData['pathImage'] = $path;
        }

        $blogPost->update($validatedData);

        return back()->with('status', 'Post created successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BlogPost $blogPost)
    {
        $blogPost->delete();

        return back()->with('status', 'Post deleted!');
    }
}
