import React, { useState, useEffect } from 'react';

export default function CountdownApp({ title, setClose = null }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isToday21st, setIsToday21st] = useState(false);

  // 🗓 Get next 21st of the current or next month
  const getNext21st = () => {
    const now = new Date();
    const currentDay = now.getDate();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    // If today is after 21st, go to next month
    const nextMonth = currentDay >= 21 ? currentMonth + 1 : currentMonth;
    return new Date(currentYear, nextMonth, 21, 0, 0, 0);
  };

  const targetDate = getNext21st();
  const startDate = new Date("2025-03-21T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      // 🎯 Check if today is 21st
      setIsToday21st(now.getDate() === 21);

      // ⏳ Countdown to next 21st
      const difference = targetDate - now;

      if (difference <= 0) {
        if (setClose) setClose(true);
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }

    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px', width: "12rem", display: "flex", flexDirection: "column", alignItems:"center" }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>{title}</h1>

      {isToday21st ? (
        <div style={{ color: 'red', fontSize: '1.5rem', fontWeight: 'bold' }}>
          🎉 Happy MontheVersary baby ❤️❤️❤️ 🎉
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
            <div key={unit} style={{ padding: '10px', backgroundColor: '#ffdff1', borderRadius: '8px' }}>
              <h2 style={{ fontSize: '1.5rem' }}>{timeLeft[unit]}</h2>
              <p>{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
