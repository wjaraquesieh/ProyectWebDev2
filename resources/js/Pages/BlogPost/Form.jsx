import { useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function BlogPostForm ({ blogPost, categories }) {
    const {data, setData, post, patch, reset } = useForm({
        title: blogPost?.title,
        content: blogPost?.content,
        is_anonymous: blogPost?.is_anonymous,
        category_id: blogPost?.category_id,
        image: blogPost?.image,
    })
    console.log(blogPost);

    function update(blogPost){
        patch(route('blogPost.update', blogPost),{
            onSuccess: () => reset(),
            preserveState: false,
        }) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(blogPost?.id){
            update(blogPost.id)
            return
        }
        console.log(data);
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('is_anonymous', data.is_anonymous == null ? false : data.is_anonymous);
        formData.append('category_id', data.category_id);

        // Verifica si hay una imagen antes de agregarla
        if (data.image) {
            formData.append('image', data.image);
        }
        
        post(route('blogPost.store'), formData, {
            onSuccess: () => reset(),
            preserveState: false,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    };

    return (
        <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data" className="max-w-xl mx-auto p-8 bg-white shadow-md rounded">
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Title:</label>
                <input
                type="text"
                value={data.title}
                onChange={(e) => setData('title',e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
                required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Content:</label>
                <textarea
                value={data.content}
                onChange={(e) => setData('content', e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
                rows="10"
                maxLength="20000"
                required
                />
            </div>

            <div className="mb-4">
                <label className="inline-flex items-center">
                <input
                    type="checkbox"
                    checked={data.is_anonymous}
                    onChange={(e) => setData('is_anonymous',e.target.checked)}
                    className="form-checkbox"
                />
                <span className="ml-2 text-gray-700 font-semibold">Publish post as Anonymous</span>
                </label>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Category:</label>
                <select
                    value={data.category_id}
                    onChange={(e) => setData('category_id', e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded"
                >
                    <option value="">...</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Upload Image:</label>
                <input
                type="file"
                onChange={(e) => setData('image', e.target.files[0])}
                className="block w-full text-gray-700 border border-gray-300 p-2 rounded"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Publish
            </button>
        </form>
    );
}