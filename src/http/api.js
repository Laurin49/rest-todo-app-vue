import axios from "axios";

axios.defaults.withCredentials = true;

const api = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: import.meta.env.VITE_BASE_URL,
});
api.interceptors.request.use((config) => {
  const token = document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN='));
  if (token) {
    config.headers['X-XSRF-TOKEN'] = decodeURIComponent(token.split('=')[1]);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;