import React, { useEffect, useState } from 'react';

function Home() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/quote')
      .then(res => res.json())
      .then(data => setQuote(data.quote));
  }, []);

  return (
    <div className="home">
      <h1>Welcome to MindfulMood+</h1>
      <p>"{quote}"</p>
      <button onClick={() => window.location.href = "/checkin"}>Check-in Mood</button>
    </div>
  );
}

export default Home;
