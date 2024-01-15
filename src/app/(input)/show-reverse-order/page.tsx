'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Contact from './Contact.tsx';

export default function ContactList() {
  const router = useRouter();

  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          value={reverse}
          onChange={e => {
            setReverse(e.target.checked)
          }}
        />{' '}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map((contact, i) =>
          <li key={contact.id}>
            <Contact key={contact.id} contact={contact} />
          </li>
        )}
      </ul>
      <button type="button" onClick={() => router.push('/reset-detail-form')}>
        To Edit contacts
      </button>
    </>
  );
}

const contacts = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];

