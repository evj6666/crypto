import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Support from './Pages/Support/Support';
import TransectionPage from './Pages/Transection/TransectionPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transection" element={<TransectionPage />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
};

export default App;
