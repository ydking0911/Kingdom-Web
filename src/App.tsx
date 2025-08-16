import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import ContentPage from './pages/Content';
import Discord from './pages/Discord';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/content" element={<ContentPage />} />
          <Route path="/discord" element={<Discord />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
