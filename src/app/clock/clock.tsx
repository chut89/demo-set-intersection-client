'use client';
import { useState, useEffect } from 'react';
import { useTime } from './useTime.tsx'

// Forcing useEffect to run on the client only, details at https://nextjs.org/docs/messages/react-hydration-error#solution-1-using-useeffect-to-run-on-the-client-only
function Clock({ time }) {
  function calculateDayNight() {
    let hours = time.getHours();
    return hours >= 0 && hours <= 6 ? 'night' : 'day';
  }

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (isClient ?
        <h1 id="time" className={calculateDayNight(time)}>
          {time.toLocaleTimeString()}
        </h1> : 'Prerendering'
  );
}

export function ClockApp() {
  const time = useTime();

  return (
    <Clock time={time} />
  );
}

