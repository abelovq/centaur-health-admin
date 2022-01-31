import axios from 'axios';

const AXIOS_TIMEOUT = 1e4;

// TODO need configure dev stage and prod config

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: AXIOS_TIMEOUT,
});
