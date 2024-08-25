import React from 'react';

function PlayerList({ players, onDelete, onEdit }) {
  return (
    <ul>
      {players.map(player => (
        <li key={player.id}>
          {player.name} - Level: {player.level} - Goalkeeper: {player.is_goalkeeper ? 'Yes' : 'No'} - Confirmed: {player.is_present ? 'Yes' : 'No'}
          <div className="button-group">
            <button className="edit-button" onClick={() => onEdit(player.id)}>Edit</button>
            <button className="delete-button" onClick={() => onDelete(player.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PlayerList;
