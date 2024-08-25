import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerListPage from './pages/PlayerListPage';
import PlayerRegisterPage from './pages/PlayerRegisterPage';
import PlayerUpdatePage from './pages/PlayerUpdatePage';
import TeamListPage from './pages/TeamListPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PlayerListPage />} />
        <Route path="/register" element={<PlayerRegisterPage />} />
        <Route path="/update-player/:id" element={<PlayerUpdatePage />} />
        <Route path="/teams" element={<TeamListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
