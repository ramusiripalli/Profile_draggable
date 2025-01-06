import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { ProfileSection } from './components/ProfileSection';
import { BioSection } from './components/BioSection';
import { TopicsSection } from './components/TopicsSection';
import { PostsSection } from './components/PostsSection';
import { ThemeCustomizer } from './components/ThemeCustomizer';
import { initialProfile } from './data/initialProfile';
import { Profile, ProfileSection as ProfileSectionType } from './types/profile';

function App() {
  const [profile, setProfile] = useState<Profile>(initialProfile);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setProfile((profile) => {
        const oldIndex = profile.sections.findIndex((s) => s.id === active.id);
        const newIndex = profile.sections.findIndex((s) => s.id === over?.id);

        return {
          ...profile,
          sections: arrayMove(profile.sections, oldIndex, newIndex),
        };
      });
    }
  };

  const renderSection = (section: ProfileSectionType) => {
    switch (section.type) {
      case 'bio':
        return (
          <BioSection
            bio={profile.bio}
            onSave={(bio) => setProfile({ ...profile, bio })}
          />
        );
      case 'topics':
        return (
          <TopicsSection
            topics={profile.topics}
            onSave={(topics) => setProfile({ ...profile, topics })}
          />
        );
      case 'posts':
        return <PostsSection posts={profile.posts} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-screen p-8"
      style={{ backgroundColor: profile.theme.secondary }}
    >
      <div className="max-w-3xl mx-auto">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={profile.sections}
            strategy={verticalListSortingStrategy}
          >
            {profile.sections.map((section) => (
              <ProfileSection
                key={section.id}
                section={section}
                theme={profile.theme}
              >
                {renderSection(section)}
              </ProfileSection>
            ))}
          </SortableContext>
        </DndContext>
      </div>

      <ThemeCustomizer
        theme={profile.theme}
        onThemeChange={(theme) => setProfile({ ...profile, theme })}
      />
    </div>
  );
}

export default App;