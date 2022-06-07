//src/index.js
import { createStore } from "redux";
import reducer from "./reducer";
import { increment, decrement, random } from "./actions";

//Создаю store
const store = createStore(reducer);

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
