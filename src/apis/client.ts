import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_BASE_URL,
});