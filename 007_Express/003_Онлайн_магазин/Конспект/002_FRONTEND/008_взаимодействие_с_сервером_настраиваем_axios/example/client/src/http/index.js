// http index.js
import axios from 'axios';

// Запросы не требующие авторизации
const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Запросы требующие авторизацию
const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

//Создаю interceptor
const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

//Добавляю interceptor на каждый запрос
$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
