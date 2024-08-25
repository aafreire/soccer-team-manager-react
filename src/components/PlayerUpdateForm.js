import React, { useState, useEffect } from 'react';
import { getPlayerById, updatePlayer } from '../services/api';
import { useParams } from 'react-router-dom';

function PlayerUpdateForm() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [level, setLevel] = useState(1);
  const [isGoalkeeper, setIsGoalkeeper] = useState(false);
  const [isPresent, setIsPresent] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPlayer = async () => {
      const response = await getPlayerById(id);
      setName(response.data.name);
      setLevel(response.data.level);
      setIsGoalkeeper(response.data.is_goalkeeper);
      setIsPresent(response.data.is_present);
    };
    fetchPlayer();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updatePlayer(id, { name, level, is_goalkeeper: isGoalkeeper, is_present: isPresent });
    setMessage(`Player ${response.data.name} updated successfully!`);
  };

  return (
    <div className="form-container">
      <div className="register-form">
        <h1 className="register-title">Update Player</h1>
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
          <button type="submit" className="register-button">Update</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default PlayerUpdateForm;
