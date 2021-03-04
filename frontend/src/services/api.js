import axios from 'axios';


const api = axios.create({
  baseURL: 'http://enderecodobackend:3333',
});

export default api;

