import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function MoodHistory() {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/moods')
      .then(res => res.json())
      .then(data => setMoods(data));
  }, []);

  return (
    <div className="mood-history">
      <h2>Your Mood Trends</h2>
      <LineChart width={500} height={300} data={moods.map((m, idx) => ({ name: idx + 1, mood: m.mood }))}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="mood" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default MoodHistory;
