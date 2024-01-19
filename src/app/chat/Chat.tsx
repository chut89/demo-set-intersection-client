import { useState, useRef } from 'react';

export default function Chat({contact, message, dispatch}) {
  const [isSending, setIsSending] = useState(false);
  const timeoutRef = useRef(null);

  return (
    <section className="chat">
      <textarea
        disabled={isSending}
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
        disabled={isSending}
        onClick={() => {
          setIsSending(true); 
          timeoutRef.current = setTimeout(() => {
            alert(message + ' was sent to ' + contact.name);
            dispatch({ type: 'edited_message', contactId: contact.id, message: '' });
            setIsSending(false);
          }, 3000);
        }}
      >Send to {contact.email}</button>
      {isSending &&
        <button onClick={() => {
          setIsSending(false);
          clearTimeout(timeoutRef.current);                    
        }}>
          Undo
        </button>
      }
    </section>
  );
}

