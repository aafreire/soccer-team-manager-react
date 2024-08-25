import React, { useState, useEffect, useCallback } from 'react';
import PlayerList from '../components/PlayerList';
import Pagination from '../components/Pagination';
import { deletePlayer } from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function PlayerListPage() {
  const [players, setPlayers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchName, setSearchName] = useState('');
  const [searchLevel, setSearchLevel] = useState('');
  const [searchPresence, setSearchPresence] = useState('');
  const [searchGoalkeeper, setSearchGoalkeeper] = useState('');
  const navigate = useNavigate();

  const fetchPlayers = useCallback((page = 1) => {
    const query = new URLSearchParams({ page: page });

    if (searchName) query.append('name', searchName);
    if (searchLevel) query.append('level', searchLevel);
    if (searchPresence) query.append('is_present', searchPresence === 'yes' ? 1 : 0);
    if (searchGoalkeeper) query.append('is_goalkeeper', searchGoalkeeper === 'yes' ? 1 : 0);

    fetch(`http://localhost:8080/api/players?${query.toString()}`)
      .then(response => response.json())
      .then(data => {
        setPlayers(data.data);
        setTotalPages(data.last_page);
      })
      .catch(error => {
        console.error('Erro ao buscar os jogadores:', error);
      });
  }, [searchName, searchLevel, searchPresence, searchGoalkeeper]);

  useEffect(() => {
    fetchPlayers(currentPage);
  }, [currentPage, fetchPlayers]);

  const handleDelete = async (id) => {
    try {
      await deletePlayer(id);
      fetchPlayers(currentPage);
      alert('Player deleted successfully!');
    } catch (error) {
      console.error('Error deleting player:', error);
      alert('Failed to delete player.');
    }
  };

  const handleEdit = (id) => {
    navigate(`/update-player/${id}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    fetchPlayers(pageNumber);
  };

  return (
    <div className="container">
      <h1>Player List</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Search by Level"
          value={searchLevel}
          onChange={(e) => setSearchLevel(e.target.value)}
        />
        <select value={searchPresence} onChange={(e) => setSearchPresence(e.target.value)}>
          <option value="">Search by Presence</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <select value={searchGoalkeeper} onChange={(e) => setSearchGoalkeeper(e.target.value)}>
          <option value="">Search by Goalkeeper</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <PlayerList players={players} onDelete={handleDelete} onEdit={handleEdit} />
      <Pagination
        totalPages={totalPages}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
}

export default PlayerListPage;
