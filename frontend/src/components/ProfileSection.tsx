import { ReactNode } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';
import { ProfileSection as ProfileSectionType, Theme } from '../types/profile';

interface ProfileSectionProps {
  section: ProfileSectionType;
  children: ReactNode;
  theme: Theme;
}

export function ProfileSection({ section, children, theme }: ProfileSectionProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: theme.background,
    color: theme.text,
    borderColor: theme.secondary,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative p-6 mb-4 rounded-lg border shadow-sm transition-all hover:shadow-md"
    >
      <div
        {...attributes}
        {...listeners}
        className="absolute top-3 right-3 cursor-move p-2 rounded hover:bg-gray-100 transition-colors"
      >
        <GripVertical className="w-5 h-5" />
      </div>
      {children}
    </div>
  );
}