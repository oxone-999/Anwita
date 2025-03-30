import React, { useState, useEffect } from 'react';

export default function CountdownApp() {
  const targetDate = new Date('2025-04-04T10:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', backgroundColor: '#1a1a1a', color: 'white', height: '100vh', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>Countdown to New Year</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', textAlign: 'center' }}>
        <div style={{ padding: '10px', backgroundColor: '#333', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.5rem' }}>{timeLeft.days}</h2>
          <p>Days</p>
        </div>
        <div style={{ padding: '10px', backgroundColor: '#333', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.5rem' }}>{timeLeft.hours}</h2>
          <p>Hours</p>
        </div>
        <div style={{ padding: '10px', backgroundColor: '#333', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.5rem' }}>{timeLeft.minutes}</h2>
          <p>Minutes</p>
        </div>
        <div style={{ padding: '10px', backgroundColor: '#333', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.5rem' }}>{timeLeft.seconds}</h2>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
}
