//src/requestsAPI/requestsAPI.js
const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
    .then((result) => result.json())
    .then((data) => data);
};

export { getPlanet };
