import axios from 'axios';

const api = axios.create({
  baseURL: 'https://financehealthbackend.herokuapp.com:3333',
});

export default api;
