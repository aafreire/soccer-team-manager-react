import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getPlayers = () => axios.get(`${API_URL}/players`);
export const createPlayer = (data) => axios.post(`${API_URL}/players`, data);
export const getPlayerById = (id) => axios.get(`${API_URL}/players/${id}`);
export const updatePlayer = (id, data) => axios.put(`${API_URL}/players/${id}`, data);
export const deletePlayer = (id) => axios.delete(`${API_URL}/players/${id}`);
export const getTeams = (playersPerTeam) => axios.post(`${API_URL}/players/sort`, { players_per_team: playersPerTeam });
