'use client';

import { useRef } from 'react';

import './button.css';

let timeoutID, lastChildren;

function DebouncedButton({ onClick, children }) {
  let timeoutRef = useRef(null);
  return (
    <button className='blck' onClick={() => {

      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        onClick();
      }, 1000);
      
        
    }}>
      {children}
    </button>
  );
}

export default function Dashboard() {
  return (
    <>
      <DebouncedButton
        onClick={() => alert('Spaceship launched!')}
      >
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Soup boiled!')}
      >
        Boil the soup
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Lullaby sung!')}
      >
        Sing a lullaby
      </DebouncedButton>
    </>
  )
}

