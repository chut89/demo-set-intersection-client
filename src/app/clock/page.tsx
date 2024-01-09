'use client';
import {ClockApp} from './clock.tsx'
import {StoryTray} from './StoryTray.tsx'

import {useState} from 'react'
import './clock.css'

let initialStories = [
  {id: 0, label: "Ankit's Story" },
  {id: 1, label: "Taylor's Story" },
];

export default function App() {
  let [stories, setStories] = useState([...initialStories])

  // HACK: Prevent the memory from growing forever while you read docs.
  // We're breaking our own rules here.
  if (stories.length > 100) {
    stories.length = 100;
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        textAlign: 'center',
      }}
    >
      <ClockApp />
      <StoryTray stories={stories} />
    </div>
  );
}

