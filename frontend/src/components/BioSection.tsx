import { useState } from 'react';
import { Pencil, Check } from 'lucide-react';

interface BioSectionProps {
  bio: string;
  onSave: (bio: string) => void;
}

export function BioSection({ bio, onSave }: BioSectionProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBio, setEditedBio] = useState(bio);

  const handleSave = () => {
    onSave(editedBio);
    setIsEditing(false);
  };

  return (
    <div className="relative">
      <h2 className="text-xl font-semibold mb-4">Bio</h2>
      {isEditing ? (
        <div className="space-y-2">
          <textarea
            value={editedBio}
            onChange={(e) => setEditedBio(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
          />
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            <Check className="w-4 h-4" />
            Save
          </button>
        </div>
      ) : (
        <div className="relative group">
          <p className="whitespace-pre-wrap">{bio}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 p-2 rounded hover:bg-gray-100 transition-all"
          >
            <Pencil className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}