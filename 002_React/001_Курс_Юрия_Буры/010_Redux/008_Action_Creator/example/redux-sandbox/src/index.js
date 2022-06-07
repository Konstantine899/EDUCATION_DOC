//src/index.js
import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RANDOM":
      return state + action.payload;
    default:
      return state;
  }
  return 0;
};

//Создаю store
const store = createStore(reducer);

// Action Creators

//action creator increment
const increment = () => {
  return { type: "INCREMENT" };
};

//action creator decrement
const decrement = () => {
  return { type: "DECREMENT" };
};

//action creator random
const random = (payload) => {
  return { type: "RANDOM", payload };
};

//Actions

//Увеличение счетчика
document.getElementById("inc").addEventListener("click", () => {
  return store.dispatch(increment());
});

//Уменьшение счетчика
document.getElementById("dec").addEventListener("click", () => {
  return store.dispatch(decrement());
});

//Рандомное увеличение счетчика
document.getElementById("rnd").addEventListener("click", () => {
  const payload = Math.floor(Math.random() * 10);
  store.dispatch(random(payload));
});

// Store

//Функция обновления store
const update = () => {
  document.getElementById("counter").innerHTML = store.getState();
};

//Регистрирую функцию update в store
store.subscribe(update);
