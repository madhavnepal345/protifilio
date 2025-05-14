import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Save } from 'lucide-react';

export default function CreatePost() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post creation
    navigate('/admin/posts');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Create New Post</h1>

      <form onSubmit={handleSubmit} className="max-w-4xl">
        <div className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="mt-1 block w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-300">
              Content
            </label>
            <textarea
              id="content"
              rows={12}
              className="mt-1 block w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your post content here..."
            />
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-300">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              rows={3}
              className="mt-1 block w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write a brief excerpt..."
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-300">
              Featured Image URL
            </label>
            <input
              type="url"
              id="image"
              className="mt-1 block w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URL"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-300">
              Category
            </label>
            <select
              id="category"
              className="mt-1 block w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="react">React</option>
              <option value="typescript">TypeScript</option>
              <option value="webdev">Web Development</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Save size={20} />
              Save Post
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              onClick={() => navigate('/admin/posts')}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}