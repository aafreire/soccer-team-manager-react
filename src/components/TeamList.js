import React, { useEffect, useState, useCallback } from 'react';
import { getTeams } from '../services/api';

function TeamList() {
  const [teams, setTeams] = useState([]);
  const [reserves, setReserves] = useState([]); // Novo estado para reservas
  const [playersPerTeam, setPlayersPerTeam] = useState(6);
  const [error, setError] = useState('');

  const fetchTeams = useCallback(async () => {
    try {
      setError('');
      const response = await getTeams(playersPerTeam);
      if (response.data.teams) {
        setTeams(response.data.teams); // Atualiza os times
      }
      if (response.data.reserves) {
        setReserves(response.data.reserves); // Atualiza os reservas
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  }, [playersPerTeam]);

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTeams();
  };

  const calculateAverageStrength = (team) => {
    const totalStrength = team.reduce((sum, player) => sum + player.level, 0);
    return (totalStrength / team.length).toFixed(2);
  };

  return (
    <div className="container">
      <h1>Team List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="playersPerTeam">Players per team:</label>
        <input
          type="number"
          id="playersPerTeam"
          value={playersPerTeam}
          onChange={(e) => setPlayersPerTeam(e.target.value)}
          min="1"
          required
        />
        <button type="submit">Generate Teams</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {teams.map((team, index) => (
        <div className="team" key={index}>
          <h2>Team {index + 1}</h2>
          <p><strong>Average Strength:</strong> {calculateAverageStrength(team)}</p>
          <ul>
            {team.map((player) => (
              <li key={player.id}>
                {player.is_goalkeeper ? '🧤' : '⚽'} {player.name} - Level: {player.level}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {reserves.length > 0 && (
        <div className="reserves">
          <h2>Reserves</h2>
          <ul>
            {reserves.map((player) => (
              <li key={player.id}>
                {player.is_goalkeeper ? '🧤' : '⚽'} {player.name} - Level: {player.level}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TeamList;
