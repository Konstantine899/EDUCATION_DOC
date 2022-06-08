import { $host, $authHost } from './index';
import jwt_decode from 'jwt-decode';

//Создание типа
export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', type);
  return data;
};

// Получение типа
export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

// Создаю брэнд
export const createBrand = async (brand) => {
  const { data } = await $authHost.post('api/brand', brand);
  return data;
};

// Получаю брэнд
export const fetchBrands = async () => {
  const { data } = await $host.get('api/brand');
  return data;
};

//Создаю device
export const createDevice = async (device) => {
  const { data } = await $authHost.post('api/device', device);
  return data;
};

// получаю девайса
export const fetchDevices = async () => {
  const { data } = await $host.get('api/device');
  return data;
};

// получаю один девайс
export const fetchOneDevice = async (id) => {
  const { data } = await $host.get('api/device/' + id);
  return data;
};
