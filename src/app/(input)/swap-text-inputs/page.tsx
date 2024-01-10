'use client';
import { useState } from 'react';

import '../input.css'

export default function App() {
  const [reverse, setReverse] = useState(false);
  const [texts, setTexts] = useState(['', '']);

  function setText(value, pos) {
    setTexts((pos == 0) ? [value, texts[1]] : [texts[0], value]);
  }

  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <Field label="Last name" texts={texts} setText={setText}/> 
        <Field label="First name" texts={texts} setText={setText}/>
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field label="First name" texts={texts} setText={setText}/> 
        <Field label="Last name" texts={texts} setText={setText}/>
        {checkbox}
      </>
    );    
  }
}

function Field({ label, texts, setText }) {
  const pos = (label == 'First name' ? 0 : 1);
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={texts[pos]}
        placeholder={label}
        onChange={e => setText(e.target.value, pos)}
      />
    </label>
  );
}
