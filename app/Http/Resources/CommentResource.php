<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->resource->id,
            'comment' => $this->resource->comment,
            'blog_posts_id' => $this->resource->blog_posts_id,
            'created_at' => $this->resource->created_at->diffForHumans(),
            'user_name' => $this->user->name,
        ];
    }
}
