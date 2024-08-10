import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const AddCommentModal = ({ blogPostId, onClose }) => {
  const { data, setData, post, reset } = useForm({
    comment: '',
    blog_posts_id: blogPostId,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('comment.store'), {
      onSuccess: () => {
        reset();
        onClose(); // Close modal after success
      },
    });
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Add a Comment</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              value={data.comment}
              onChange={(e) => setData('comment', e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Write your comment..."
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Send
            </button>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 font-bold py-2 px-4 rounded mt-4 ml-2"
              onClick={onClose}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCommentModal;
