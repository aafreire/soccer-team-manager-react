import React from 'react';
import { Link } from 'react-router-dom';
import corinthiansLogo from '../assets/corinthians-logo.png';

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <img src={corinthiansLogo} alt="Corinthians Logo" className="logo" />
        <h1>Soccer Team Manager</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Players List</Link>
        </li>
        <li>
          <Link to="/register">Register Player</Link>
        </li>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
