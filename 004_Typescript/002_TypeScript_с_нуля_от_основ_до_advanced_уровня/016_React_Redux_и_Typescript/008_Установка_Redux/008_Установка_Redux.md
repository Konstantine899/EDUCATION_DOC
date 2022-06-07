# 008_Установка_Redux

```shell
npm i redux react-redux axios redux-thunk
```

redux-thunk - этот модуль будет использоваться для API request внутри action creator

```tsx
import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App color={"red"}/>
    </Provider>,
    document.querySelector("#root")
);

```

Далее создаю новую папку component и в ней App.tsx.

```tsx
import React from "react";

export class App extends React.Component {
    render() {
        return <div>Hello</div>;
    }
}
```

```tsx
import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {App} from "./components/App";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector("#root")
);

```

Теперь мне нужно создать стартовый reducer. Создаю одноименную папку.

```ts
//reducers index.tsx
import {combineReducers} from "redux";

export const reducers = combineReducers({
    counter: () => {
        return 0;
    },
});

```

Пока что это просто заглушка что бы протестировать что все работает.

```tsx
import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {App} from "./components/App";
import {reducers} from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector("#root")
);
```

