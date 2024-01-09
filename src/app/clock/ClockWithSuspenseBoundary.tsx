'use client';
import { useState, useEffect } from 'react';
import { Suspense } from 'react'

import { useTime } from './useTime.tsx'

function ClockWithSuspenseBoundary({ time }) {
  function calculateDayNight() {
    let hours = time.getHours();
    return hours >= 0 && hours <= 6 ? 'night' : 'day';
  }
  const hydrated = useHydration()
  return (
    // solution was found at https://francoisbest.com/posts/2023/displaying-local-times-in-nextjs
    // In my opinion more complicated than the one below
    <Suspense key={hydrated ? 'local' : 'utc'}>
        <h1 id="time" className={calculateDayNight(time)}>
          {time.toLocaleTimeString()}
        </h1>
    </Suspense>
  );
}

// This is basically using the same idea at https://nextjs.org/docs/messages/react-hydration-error#solution-1-using-useeffect-to-run-on-the-client-only
function useHydration() {
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, [])
  return hydrated
}

export function ClockApp() {
  const time = useTime();

  return (
    <ClockWithSuspenseBoundary time={time} />
  );
}

