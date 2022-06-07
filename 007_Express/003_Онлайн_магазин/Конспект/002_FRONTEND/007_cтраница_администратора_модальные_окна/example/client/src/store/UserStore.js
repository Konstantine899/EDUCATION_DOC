//store userStore.js
import { makeAutoObservable } from 'mobx';

export default class UserStore {
  constructor() {
    this._isAuth = true;
    this._user = {};
    makeAutoObservable(this);
  }

  // изменяю состоние
  setAuth(bool) {
    this._isAuth = bool;
  }

  setUser(bool) {
    this._user = bool;
  }

  // получаю данные
  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}
