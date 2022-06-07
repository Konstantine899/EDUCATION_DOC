//src/index.js
import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from "./actions";

//Создаю store
const store = createStore(reducer);
const { dispatch } = store;

//Связанные Action Creators
const { increment, decrement, random } = bindActionCreators(actions, dispatch);
/*increment, decrement, random это не оригинальные функции c actions.js*/
/*теперь increment, decrement, random это функции которые передают созданный action в dispatch*/

//Actions

//Увеличение счетчика
document.getElementById("inc").addEventListener("click", increment);

//Уменьшение счетчика
document.getElementById("dec").addEventListener("click", decrement);

//Рандомное увеличение счетчика
document.getElementById("rnd").addEventListener("click", () => {
  const payload = Math.floor(Math.random() * 10);
  random(payload);
});

// Store

//Функция обновления store
const update = () => {
  document.getElementById("counter").innerHTML = store.getState();
};

//Регистрирую функцию update в store
store.subscribe(update);
