import React, { useEffect, useState } from 'react';

function StreakTracker() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/moods')
      .then(res => res.json())
      .then(data => {
        setStreak(data.length);
      });
  }, []);

  return (
    <div className="streak-tracker">
      <h2>Current Streak: {streak} Days</h2>
    </div>
  );
}

export default StreakTracker;
