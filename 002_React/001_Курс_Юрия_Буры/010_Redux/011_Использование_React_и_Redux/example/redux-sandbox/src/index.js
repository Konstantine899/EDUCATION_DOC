//src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from "./actions";
import Counter from "./counter";

//Создаю store
const store = createStore(reducer);
const { dispatch } = store;

//Связанные Action Creators
const { increment, decrement, random } = bindActionCreators(actions, dispatch);
/*increment, decrement, random это не оригинальные функции c actions.js*/
/*теперь increment, decrement, random это функции которые передают созданный action в dispatch*/

//Работа с DOM

// Store

const root = createRoot(document.getElementById("root"));

//Функция обновления store
const update = () => {
  root.render(
    <Counter
      counter={store.getState()}
      increment={increment}
      decrement={decrement}
      random={() => {
        const value = Math.floor(Math.random() * 10);
        random(value);
      }}
    />
  );
};

// Первоначальная отрисовка компонента
update();

//Регистрирую функцию update в store
store.subscribe(update);
