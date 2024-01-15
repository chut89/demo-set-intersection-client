'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'

import ContactListHeader from './ContactListHeader.tsx';
import EditContact from './EditContact.tsx';

import './form.css';
import '../input.css';

export default function ContactManager() {
  const router = useRouter();

  const [
    contacts,
    setContacts
  ] = useState(initialContacts);
  const [
    selectedId,
    setSelectedId
  ] = useState(0);
  const selectedContact = contacts.find(c =>
    c.id === selectedId
  );

  function handleSave(updatedData) {
    const nextContacts = contacts.map(c => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div>
      <ContactListHeader
        contacts={initialContacts}
        selectedId={selectedId}
        onSelect={id => setSelectedId(id)}
      />
      <hr />
      <EditContact
        key={selectedContact.id}
        initialData={selectedContact}
        onSave={handleSave}
      />
      <button type="button" onClick={() => router.push('/show-reverse-order')}>
        To Contact List
      </button>
    </div>
  )
}

const initialContacts = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];

