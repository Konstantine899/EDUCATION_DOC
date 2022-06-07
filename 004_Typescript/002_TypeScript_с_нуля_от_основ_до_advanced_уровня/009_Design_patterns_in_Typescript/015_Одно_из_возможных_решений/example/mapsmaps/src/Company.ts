// src Company.ts
import * as faker from "faker";
import { fake } from "faker";

export class Company {
  companyName: string;
  catchPhrase: string; // крылатая фраза
  // Это не объект. Это будет объектом после инициализации в конструкторе
  location: {
    lat: number;
    lng: number;
  };

  //Инициализирую все в конструкторе
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
