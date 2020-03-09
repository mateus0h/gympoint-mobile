import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.apimateus.life/',
});

export default api;
