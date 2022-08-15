import axios from 'axios';

// console.log('environment:', process.env.REACT_APP_AXIOS)

// add env vars to change to local or hosted
const axiosAPI = axios.create({
  baseURL: process.env.REACT_APP_AXIOS === 'development' ? 'http://localhost:3001/api/' : '/api',
  withCredentials: true,
  timeout: 50000
});

export default axiosAPI;