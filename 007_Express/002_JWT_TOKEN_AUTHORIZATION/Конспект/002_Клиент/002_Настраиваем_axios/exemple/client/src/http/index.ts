//  http index.ts

import axios from 'axios';

export const API_URL = `http://localhost:5000`;

const $api = axios.create({
  withCredentials: true, // автоматический подхват cookie
  baseURL: API_URL, // базовый URL
});
