//  http index.ts

import axios from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';
export const API_URL = `http://localhost:5000/api`;

const $api = axios.create({
  withCredentials: true, // автоматический подхват cookie
  baseURL: API_URL, // базовый URL
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(`token`)}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config; // переменная хранящая все по запросу. Получаю 401
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true; // поле сообщающее что запрос мы уже делали
      try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
          withCredentials: true,
        }); // перезаписываю token
        localStorage.setItem('token', response.data.accessToken);
        return $api.request(originalRequest); // повторяю запрос. в instance originalRequest  хранятся все данные для запроса
      } catch (e) {
        console.log('Не авторизован');
      }
    }
    throw error; // пробрасываю на верхний уровень если это не 401
  }
);

export default $api; // Экспортирую инстанс axios
