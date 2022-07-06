import axios from 'axios';

 // add env vars to change to local or hosted
const axiosAPI = axios.create({
  baseURL: 'http://localhost:3001/',
  withCredentials: true,
});

export default axiosAPI;