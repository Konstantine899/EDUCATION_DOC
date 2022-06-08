// store store.js

import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import AuthService from '../services/AuthService';
import { IUser } from './../models/IUser';
import { AuthResponse } from '../models/response/AuthResponse';
import { API_URL } from '../http/index';

export default class Store {
  user = {} as IUser; // сохраняю данные о пользователе
  isAuth = false; // авторизован ли пользователь
  isLoading = false; // Загрузка

  constructor() {
    makeAutoObservable(this);
  }

  // мутация для изменения переменной isAuth
  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  // мутация для изменения переменной user
  setUser(user: IUser) {
    this.user = user;
  }

  // мутация состояния загрузки
  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  // реализую экшены
  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password); // делаю запрос
      console.log(response);
      localStorage.setItem('token', response.data.accessToken); // если запрос успешен сохраняю токен в localStorage
      this.setAuth(true); // меняю состояние
      this.setUser(response.data.user); // сохраняю данные пользователя внутри хранилища
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async registration(email: string, password: string) {
    try {
      const response = await AuthService.registration(email, password); // делаю запрос
      console.log(response);
      localStorage.setItem('token', response.data.accessToken); // если запрос успешен сохраняю токен в localStorage
      this.setAuth(true); // меняю состояние
      this.setUser(response.data.user); // сохраняю данные пользователя внутри хранилища
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout(); // делаю запрос
      localStorage.removeItem('token'); // Удаляю токен
      this.setAuth(false); // меняю состояние
      this.setUser({} as IUser); // сохраняю данные пользователя внутри хранилища
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async checkAuth() {
    this.setLoading(true); // пошла загрузка
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      console.log(response);
      if (response.data.status === 401) {
        new TypeError('401');
      } else {
        localStorage.setItem('token', response.data.accessToken); // если запрос успешен сохраняю токен в localStorage
        this.setAuth(true); // меняю состояние
        this.setUser(response.data.user); // сохраняю данные пользователя внутри хранилища
      }
    } catch (e) {
      this.setAuth(false);
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false); // конец загрузки
    }
  }
}
