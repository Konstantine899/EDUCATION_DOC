//src/index.js
import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
  return 0;
};

//Создаю store
const store = createStore(reducer);

//Увеличение счетчика
document.getElementById("inc").addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

//Уменьшение счетчика
document.getElementById("dec").addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});

//Функция обновления store
const update = () => {
  document.getElementById("counter").innerHTML = store.getState();
};

//Регистрирую функцию update в store
store.subscribe(update);
