import React, { useState } from 'react';

function MoodForm() {
  const [mood, setMood] = useState('');
  const [reason, setReason] = useState('');

  const moods = ['😊', '😔', '😡', '😢', '😎', '😰'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/mood', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mood, reason }),
    });
    alert('Mood Submitted!');
    window.location.href = "/tracker";
  };

  return (
    <form onSubmit={handleSubmit} className="mood-form">
      <h2>Select Your Mood</h2>
      <div>
        {moods.map((m, idx) => (
          <button key={idx} onClick={() => setMood(m)}>{m}</button>
        ))}
      </div>
      <input value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Why?" required />
      <button type="submit">Submit Mood</button>
    </form>
  );
}

export default MoodForm;
