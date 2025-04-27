import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MoodForm from './components/MoodForm';
import MoodHistory from './components/MoodHistory';
import StreakTracker from './components/StreakTracker';
import SelfCareTips from './components/SelfCareTips';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkin" element={<MoodForm />} />
          <Route path="/tracker" element={<MoodHistory />} />
          <Route path="/streak" element={<StreakTracker />} />
          <Route path="/selfcare" element={<SelfCareTips />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
