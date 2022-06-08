// store deviceStore.js

import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Холодильники' },
      { id: 2, name: 'Смартфоны' },
      { id: 3, name: 'Ноутбуки' },
      { id: 4, name: 'Телевизоры' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Lenovo' },
      { id: 4, name: 'Asus' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'Iphone 12 pro',
        price: 2500,
        rating: 5,
        img: 'https://static.21vek.by/img/galleries/6240/333/iphone12pro128gbmgmn3_apple_5f9bdbcc46c7c.jpeg',
      },
      {
        id: 2,
        name: 'Iphone 12 pro',
        price: 2500,
        rating: 5,
        img: 'https://static.21vek.by/img/galleries/6240/333/iphone12pro128gbmgmn3_apple_5f9bdbcc46c7c.jpeg',
      },
      {
        id: 3,
        name: 'Iphone 12 pro',
        price: 2500,
        rating: 5,
        img: 'https://static.21vek.by/img/galleries/6240/333/iphone12pro128gbmgmn3_apple_5f9bdbcc46c7c.jpeg',
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 2500,
        rating: 5,
        img: 'https://static.21vek.by/img/galleries/6240/333/iphone12pro128gbmgmn3_apple_5f9bdbcc46c7c.jpeg',
      },
      {
        id: 5,
        name: 'Iphone 12 pro',
        price: 2500,
        rating: 5,
        img: 'https://static.21vek.by/img/galleries/6240/333/iphone12pro128gbmgmn3_apple_5f9bdbcc46c7c.jpeg',
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  // изменяю
  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  // получаю данные
  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._brands;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
