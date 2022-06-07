# 002_Инициализация_Redux_store

```shell
npx create-react-app . --template typescript
```

Таким образом у нас создастся сдандартное create-react-app приложение но c языком TS. Как вы можете заметить файлы имеют расширение либо ts либо tsx если это react компоненты.

Удалим все лишее низ папки src и оставим только index.tsx и App.tsx.

Следующим этапом установим все необходимые зависимости которые в ходе этого курса нам понадобятся.

```shell
npm i @types/react-redux redux react-redux redux-thunk axios
```

* @types/react-redux - типы для react-redux
* redux - стейт менеджер
* react-redux - для связи react со стейт менеджером redux
* redux-thunk - для асинхронных экшенов
* axios - для того что бы отправлять запросы на сервер


Задаю файловую структуру проекта. Дирректории

* types - тут мы будем описывать типы.
* store - в этой директории будем взаимодействовать с redux
* components


И так инициализация Redux store.

В папке store создаю index.ts. И здесь мы будем инициализировать store нашего приложения. Импортирую из пакета redux функцию createStore. Сразу же произвожу инициализацию хранилища в переменную store.

Функция createStore первым пареметром принимет reducer.

Вторым параметром она принимает middleware. middleware передаются через функцию applyMiddleware. И в данном случае у нас один middleware thunk.

```ts
// src/store/index.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore({}, applyMiddleware(thunk));

```



