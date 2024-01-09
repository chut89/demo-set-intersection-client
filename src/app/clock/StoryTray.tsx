'use client';
export function StoryTray({ stories }) {

  return (
    <ul>
      {stories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
        <li key='Create'>
          Create Story
        </li>
    </ul>
  );
}

