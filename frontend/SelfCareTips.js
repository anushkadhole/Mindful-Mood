import React, { useEffect, useState } from 'react';

function SelfCareTips() {
  const [tip, setTip] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/moods')
      .then(res => res.json())
      .then(data => {
        const lastMood = data[0]?.mood || '';
        if (lastMood === '😔' || lastMood === '😢') {
          setTip('Take a walk outside and breathe fresh air!');
        } else {
          setTip('Keep doing what makes you feel good!');
        }
      });
  }, []);

  return (
    <div className="self-care-tips">
      <h2>Self Care Tip:</h2>
      <p>{tip}</p>
    </div>
  );
}

export default SelfCareTips;
