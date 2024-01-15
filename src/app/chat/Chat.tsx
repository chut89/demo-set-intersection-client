import { useState } from 'react';

export default function Chat({contact, message, dispatch}) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          dispatch({
            type: 'edited_message',
            contactId: contact.id,
            message: e.target.value
          });
        }}
      />
      <br />
      <button
        onClick={() => {
          alert(message + ' was sent to ' + contact.name);
          dispatch({ type: 'edited_message', contactId: contact.id, message: '' });
        }}
      >Send to {contact.email}</button>
    </section>
  );
}

