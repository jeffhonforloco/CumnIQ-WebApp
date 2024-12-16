import React, { useState } from 'react';
import { WebPage } from '../types';
import { useWebPages } from '../hooks/useWebPages';
import { toast } from 'react-hot-toast';

interface WebPageEditorProps {
  initialPage?: WebPage;
  onSave: () => void;
  onCancel: () => void;
}

export function WebPageEditor({ initialPage, onSave, onCancel }: WebPageEditorProps) {
  const [title, setTitle] = useState(initialPage?.title || '');
  const [content, setContent] = useState(initialPage?.content || '');
  const [description, setDescription] = useState(initialPage?.description || '');
  const { createPage, updatePage } = useWebPages();
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      if (initialPage) {
        await updatePage(initialPage.id, { title, content, description });
      } else {
        await createPage({ title, content, description });
      }
      toast.success('Page saved successfully');
      onSave();
    } catch (error) {
      toast.error('Failed to save page');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          required
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save Page'}
        </button>
      </div>
    </form>
  );
}