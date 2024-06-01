import axios from 'axios';

const API_URL = 'http://localhost:5001/api/plants';

export const getPlants = () => axios.get(API_URL);
export const createPlant = (plant) => axios.post(API_URL, plant);
export const updatePlant = (id, updatedPlant) => axios.put(`${API_URL}/${id}`, updatedPlant);
export const deletePlant = (id) => axios.delete(`${API_URL}/${id}`);
export const getPlantById = (id) => axios.get(`${API_URL}/${id}`);
