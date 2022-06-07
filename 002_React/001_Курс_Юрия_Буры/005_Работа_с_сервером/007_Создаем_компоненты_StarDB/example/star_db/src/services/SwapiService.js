// src/services/SwapiService.js
export default class SwapiService {
  // базовый url
  API_BASE = `https://swapi.dev/api`;

  async getResource(url) {
    // составляю строку из базового url и того url что прилетает из методов
    const response = await fetch(`${this.API_BASE}${url}`);
    //Обработка ошибки на клиенте
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}` + `received ${response.status}`);
    }
    const body = await response.json(); // получаю тело запроса
    return body;
  }

  // Персонажи

  // Получение всех персонажей
  async getAllPeople() {
    // передаю только нужную часть url
    const response = await this.getResource(`/people/`);
    return response.results;
  }
  // получаю конкретного персонажа
  async getPerson(id) {
    // передаю только нужную часть url
    const response = await this.getResource(`/people/${id}/`);
    return response;
  }

  // Планеты

  // Получаю все планеты
  async getAllPlanets() {
    const response = await this.getResource(`/planets/`);
    return response;
  }
  //Получаю планету
  async getPlanet(id) {
    const response = await this.getResource(`/planets/${id}/`);
    return response;
  }

  //Космические корабли

  // Получаю все корабли
  async getAllStarShips() {
    const response = await this.getResource(`/starships/`);
    return response;
  }

  //Получаю космический корабль
  async getStarship(id) {
    const response = await this.getResource(`/starships/${id}/`);
    return response;
  }
}

// Код обработки данных

// Инициализирую класс
const swapi = new SwapiService();

// Получаю ответ с сервера и обрабатываю promise
swapi.getPerson(3).then((person) => {
  console.log(person.name);
});
