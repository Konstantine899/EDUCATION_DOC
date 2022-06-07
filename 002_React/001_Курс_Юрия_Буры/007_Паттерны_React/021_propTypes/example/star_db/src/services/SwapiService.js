// src/services/SwapiService.js
export default class SwapiService {
  // базовый url
  API_BASE = `https://swapi.dev/api`;
  IMAGE_BASE = `https://starwars-visualguide.com/assets/img`;

  getResource = async (url) => {
    // составляю строку из базового url и того url что прилетает из методов
    const response = await fetch(`${this.API_BASE}${url}`);
    //Обработка ошибки на клиенте
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}  received ${response.status}`);
    }
    const body = await response.json(); // получаю тело запроса
    return body;
  };

  // Персонажи

  // Получение всех персонажей
  getAllPeople = async () => {
    // передаю только нужную часть url
    const response = await this.getResource(`/people/`);
    return response.results.map(this.transformPerson);
  };
  // получаю конкретного персонажа
  getPerson = async (id) => {
    // передаю только нужную часть url
    const person = await this.getResource(`/people/${id}/`);
    return this.transformPerson(person);
  };

  // Планеты

  // Получаю все планеты
  getAllPlanets = async () => {
    const planets = await this.getResource(`/planets/`);
    return planets.results.map(this.transformPlanet);
  };
  //Получаю планету
  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this.transformPlanet(planet);
  };

  //Космические корабли

  // Получаю все корабли
  getAllStarships = async () => {
    const response = await this.getResource(`/starships/`);
    return response.results.map(this.transformStarShip);
  };

  //Получаю космический корабль
  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this.transformStarShip(starship);
  };

  //Получаю адрес картинки персонажа
  getPersonImage = ({ id }) => {
    return `${this.IMAGE_BASE}/characters/${id}.jpg`;
  };
  //Получаю адрес картинки космического корабля
  getStarshipImage = ({ id }) => {
    return `${this.IMAGE_BASE}/starships/${id}.jpg`;
  };

  //Получаю адрес картинки планеты
  getPlanetImage = ({ id }) => {
    return `${this.IMAGE_BASE}/planets/${id}.jpg`;
  };

  // Трансформация данных полученных от API в нужный формат

  // Извлекаю id
  extractId = (item) => {
    //регуларка для поиска id в строке url
    const idRegExp = /\/([0-9]*)\/$/;
    // ищу id
    return item.url.match(idRegExp)[1];
    // Нулевая группа это все выражение, а первая группа это все что в скобках
  };

  // Трансформация данных для планет(ы)
  transformPlanet = (planet) => {
    return {
      id: this.extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  // Трансформация данных для космическ(ого)их корабл(я)ей
  transformStarShip = (starship) => {
    return {
      id: this.extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };

  // Трансформация данных для персонажа(ей)
  transformPerson = (person) => {
    return {
      id: this.extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };
}
