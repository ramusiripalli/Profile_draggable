import { Profile } from '../types/profile';

export const initialProfile: Profile = {
  bio: "Hi! I'm a software developer passionate about creating amazing user experiences. I love working with React and exploring new technologies.",
  topics: [
    { id: '1', name: 'React' },
    { id: '2', name: 'TypeScript' },
    { id: '3', name: 'Node.js' },
  ],
  posts: [
    {
      id: '1',
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React and how to build your first component.',
      date: '2024-02-20',
    },
    {
      id: '2',
      title: 'TypeScript Best Practices',
      excerpt: 'Essential TypeScript patterns and practices for better code.',
      date: '2024-02-15',
    },
  ],
  sections: [
    { id: 'bio', type: 'bio', order: 0 },
    { id: 'topics', type: 'topics', order: 1 },
    { id: 'posts', type: 'posts', order: 2 },
  ],
  theme: {
    primary: '#3B82F6',
    secondary: '#E5E7EB',
    background: '#FFFFFF',
    text: '#1F2937',
  },
};