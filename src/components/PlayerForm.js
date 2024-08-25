import React, { useState } from 'react';
import { createPlayer } from '../services/api';

function PlayerForm() {
  const [name, setName] = useState('');
  const [level, setLevel] = useState(1);
  const [isGoalkeeper, setIsGoalkeeper] = useState(false);
  const [isPresent, setIsPresent] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createPlayer({ name, level, is_goalkeeper: isGoalkeeper, is_present: isPresent });
    setMessage(`Player ${response.name} registered successfully!`);
    setName('');
    setLevel(1);
    setIsGoalkeeper(false);
    setIsPresent(false);
  };

  return (
    <div className="register-form">
      <h1 className="register-title">Register Player</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            className="register-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter player name"
            required
          />
        </div>
        <div className="form-group">
          <label>Level:</label>
          <input
            type="number"
            className="register-input"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            placeholder="1-5"
            min="1"
            max="5"
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label className="goalkeeper-label">
            <input
              type="checkbox"
              className="goalkeeper-checkbox"
              checked={isGoalkeeper}
              onChange={(e) => setIsGoalkeeper(e.target.checked)}
            />
            Goalkeeper
          </label>
        </div>
        <div className="form-group">
          <label className="presence-label">
            <input
              type="checkbox"
              className="presence-checkbox"
              checked={isPresent}
              onChange={(e) => setIsPresent(e.target.checked)}
            />
            Confirmed Presence
          </label>
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default PlayerForm;
