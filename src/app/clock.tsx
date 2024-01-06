'use client';
import { useState, useEffect } from 'react';

export function Clock({ time }) {
  function calculateDayNight() {
    let hours = time.getHours();
    return hours >= 0 && hours <= 6 ? 'night' : 'day';
  }

  return (
    <h1 id="time" className={calculateDayNight(time)}>
      {time.toLocaleTimeString()}
    </h1>
  );
}

export function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function App() {
  const time = useTime();
  //let hours = time.getHours();
  return (
    <Clock time={time} />
  );
}

