'use client';
import { useState } from 'react';
import '../input.css';

export default function InputTextWithHint() {
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      {showHint && <p><i>Hint: Your favorite city?</i></p>}
      <Form />
      <button onClick={() => {
          setShowHint(!showHint);
      }}>{showHint ? 'Hide hint' : 'Show hint'}</button>
    </div>
  );
}

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}

