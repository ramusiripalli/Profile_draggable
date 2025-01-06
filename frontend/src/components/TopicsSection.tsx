import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Topic } from '../types/profile';

interface TopicsSectionProps {
  topics: Topic[];
  onSave: (topics: Topic[]) => void;
}

export function TopicsSection({ topics, onSave }: TopicsSectionProps) {
  const [newTopic, setNewTopic] = useState('');

  const addTopic = () => {
    if (newTopic.trim()) {
      onSave([...topics, { id: crypto.randomUUID(), name: newTopic.trim() }]);
      setNewTopic('');
    }
  };

  const removeTopic = (id: string) => {
    onSave(topics.filter(topic => topic.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Favorite Topics</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {topics.map(topic => (
          <div
            key={topic.id}
            className="flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full"
          >
            <span>{topic.name}</span>
            <button
              onClick={() => removeTopic(topic.id)}
              className="p-1 rounded-full hover:bg-blue-200 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
          placeholder="Add a topic..."
          className="flex-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onKeyPress={(e) => e.key === 'Enter' && addTopic()}
        />
        <button
          onClick={addTopic}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>
    </div>
  );
}