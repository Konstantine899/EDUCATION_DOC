//  http index.ts

import axios from 'axios';

export const API_URL = `http://localhost:5000`;

const $api = axios.create({
  withCredentials: true, // автоматический подхват cookie
  baseURL: API_URL, // базовый URL
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(`token`)}`;
  return config;
});

export default $api; // Экспортирую инстанс axios
