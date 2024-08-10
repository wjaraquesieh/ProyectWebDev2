<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AdoptionShelterResource extends JsonResource
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
            'name' => $this->resource->name,
            'address' => $this->resource->address,
            'email' => $this->resource->email,
            'phone' => $this->resource->phone,
            'link' => $this->resource->link,
            'days_open' => $this->resource->days_open,
            'opening_hours' => $this->resource->opening_hours,
            'created_at' => $this->resource->created_at->diffForHumans(),
            'edited' => $this->resource->created_at != $this->resource->updated_at
        ];
    }
}
