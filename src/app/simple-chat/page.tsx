'use client';

import { useRef } from 'react';

export default function Chat() {
  let textRef = useRef('');

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + textRef.current);
    }, 3000);
  }

  return (
    <>
      <input
        onChange={e => {
            textRef.current = e.target.value;
        }}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}

