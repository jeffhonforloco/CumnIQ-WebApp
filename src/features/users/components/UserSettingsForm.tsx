import React, { useState } from 'react';
import { UserSettings } from '../types';
import { usersApi } from '../api/users';
import { toast } from 'react-hot-toast';

interface UserSettingsFormProps {
  userId: string;
  initialSettings: UserSettings;
  onSettingsUpdate: (settings: UserSettings) => void;
}

export function UserSettingsForm({ userId, initialSettings, onSettingsUpdate }: UserSettingsFormProps) {
  const [settings, setSettings] = useState<UserSettings>(initialSettings);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      await usersApi.updateSettings(userId, settings);
      onSettingsUpdate(settings);
      toast.success('Settings updated successfully');
    } catch (error) {
      toast.error('Failed to update settings');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={settings.emailNotifications}
            onChange={(e) => setSettings({
              ...settings,
              emailNotifications: e.target.checked
            })}
            className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
          />
          <span className="text-gray-700">Receive email notifications</span>
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Theme</label>
        <select
          value={settings.theme}
          onChange={(e) => setSettings({
            ...settings,
            theme: e.target.value as UserSettings['theme']
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Privacy Level</label>
        <select
          value={settings.privacyLevel}
          onChange={(e) => setSettings({
            ...settings,
            privacyLevel: e.target.value as UserSettings['privacyLevel']
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="friends">Friends Only</option>
        </select>
      </div>

      <div>
        <button
          type="submit"
          disabled={saving}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
      </div>
    </form>
  );
}