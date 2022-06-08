# MobX и глобальный стейт

В папке **store** создаю **store.js**

Создаю глобальный **store**. Это будет обычный класс который с помощью **MobX** мы сейчас оживим.

```ts
// store store.js

import { IUser } from './../models/IUser';

export default class Store {
  user = {} as IUser; // сохраняю данные о пользователе
  isAuth = false; // авторизован ли пользователь

  constructor() {}
}
```

Для того что бы **MobX** c этим классом мог работать мы вызываем в констукторе функцию **makeAutoObservable()** и передаем туда **this**.

```js
// store store.js

import { makeAutoObservable } from 'mobx';
import { IUser } from './../models/IUser';

export default class Store {
  user = {} as IUser; // сохраняю данные о пользователе
  isAuth = false; // авторизован ли пользователь

  constructor() {
    makeAutoObservable(this);
  }
}
```

Теперь сделаю пару мутаций которые будут изменять поля нашего **store**. Создаю **setAuth** и **setUser**.

```ts
// store store.js

import { makeAutoObservable } from 'mobx';
import { IUser } from './../models/IUser';

export default class Store {
  user = {} as IUser; // сохраняю данные о пользователе
  isAuth = false; // авторизован ли пользователь

  constructor() {
    makeAutoObservable(this);
  }

  // мутация для изменения переменной isAuth
  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  // мутация для изменения переменной user
  setUser(user: IUser) {
    this.user = user;
  }
}
```

Все что мы в этих мутациях делаем это заменяем текущее значение на то значение которое получаем в параметрах.

Сразу же реализуем асинхронные экшены. Это будут функции для регистрации и логина.

Функция логина принимает на вход **email** и **password** т.е. тоже самое как в **service**. Поскольку здесь могут быть какие-то ошибки заворачиваю все в блок **try** **catch**.

```ts
// store store.js

import { makeAutoObservable } from 'mobx';
import { IUser } from './../models/IUser';

export default class Store {
  user = {} as IUser; // сохраняю данные о пользователе
  isAuth = false; // авторизован ли пользователь

  constructor() {
    makeAutoObservable(this);
  }

  // мутация для изменения переменной isAuth
  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  // мутация для изменения переменной user
  setUser(user: IUser) {
    this.user = user;
  }

  // реализую экшены
  async login(email: string, password: string) {
    try {
    } catch (e) {}
  }
}
```

И вот здесь мы будем использовать сервис. Создаю переменную **const responce = await AuthService.login()**. В функцию **login** передаю **email**, **password**. Если запрос прошел успешно то в ответе у нас будут находиться токены. И токен доступа нам необходимо сохранить в **localStorage** что бы мы могли добавлять его к каждому запросу. Напомню что в **interceptor** мы это уже делали.

```ts
// store store.js

import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import { IUser } from './../models/IUser';

export default class Store {
  user = {} as IUser; // сохраняю данные о пользователе
  isAuth = false; // авторизован ли пользователь

  constructor() {
    makeAutoObservable(this);
  }

  // мутация для изменения переменной isAuth
  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  // мутация для изменения переменной user
  setUser(user: IUser) {
    this.user = user;
  }

  // реализую экшены
  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password); // делаю запрос
      localStorage.setItem('token', response.data.accessToken); // если запрос успешен сохраняю токен в localStorage
    } catch (e) {}
  }
}
```

Опять же если запрос прошел успешно мы вызываем мутацию **this.setAuth(true)** и передаю **true** тем самым меня состояние.

И так же мы получили в ответе данные поьзователя поэтому достаем их и так же сохраняю их внутри хранилища.

```ts
// store store.js

import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import { IUser } from './../models/IUser';

export default class Store {
  user = {} as IUser; // сохраняю данные о пользователе
  isAuth = false; // авторизован ли пользователь

  constructor() {
    makeAutoObservable(this);
  }

  // мутация для изменения переменной isAuth
  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  // мутация для изменения переменной user
  setUser(user: IUser) {
    this.user = user;
  }

  // реализую экшены
  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password); // делаю запрос
      localStorage.setItem('token', response.data.accessToken); // если запрос успешен сохраняю токен в localStorage
      this.setAuth(true); // меняю состояние
      this.setUser(response.data.user); // сохраняю данные пользователя внутри хранилища
    } catch (e) {}
  }
}
```

Если возникла какая-то ошибка, то будем выводит ее в логи. Ошибку мы на сервере помещали в поле message. TЕдиственное убедимся что это поле у нас имеется с помощью **option all chaining** оператора <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>.

![](img/001.png)

```ts
// store store.js

import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import { IUser } from './../models/IUser';

export default class Store {
  user = {} as IUser; // сохраняю данные о пользователе
  isAuth = false; // авторизован ли пользователь

  constructor() {
    makeAutoObservable(this);
  }

  // мутация для изменения переменной isAuth
  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  // мутация для изменения переменной user
  setUser(user: IUser) {
    this.user = user;
  }

  // реализую экшены
  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password); // делаю запрос
      localStorage.setItem('token', response.data.accessToken); // если запрос успешен сохраняю токен в localStorage
      this.setAuth(true); // меняю состояние
      this.setUser(response.data.user); // сохраняю данные пользователя внутри хранилища
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}
```

И теперь сделаем похожую функцию для регистрации.

![](img/002.png)

```ts
// store store.js

import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import { IUser } from './../models/IUser';

export default class Store {
  user = {} as IUser; // сохраняю данные о пользователе
  isAuth = false; // авторизован ли пользователь

  constructor() {
    makeAutoObservable(this);
  }

  // мутация для изменения переменной isAuth
  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  // мутация для изменения переменной user
  setUser(user: IUser) {
    this.user = user;
  }

  // реализую экшены
  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password); // делаю запрос
      localStorage.setItem('token', response.data.accessToken); // если запрос успешен сохраняю токен в localStorage
      this.setAuth(true); // меняю состояние
      this.setUser(response.data.user); // сохраняю данные пользователя внутри хранилища
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async registration(email: string, password: string) {
    try {
      const response = await AuthService.registration(email, password); // делаю запрос
      localStorage.setItem('token', response.data.accessToken); // если запрос успешен сохраняю токен в localStorage
      this.setAuth(true); // меняю состояние
      this.setUser(response.data.user); // сохраняю данные пользователя внутри хранилища
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}
```

И остается последний **action** это **logout**.

```ts
// store store.js

import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import { IUser } from './../models/IUser';

export default class Store {
  user = {} as IUser; // сохраняю данные о пользователе
  isAuth = false; // авторизован ли пользователь

  constructor() {
    makeAutoObservable(this);
  }

  // мутация для изменения переменной isAuth
  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  // мутация для изменения переменной user
  setUser(user: IUser) {
    this.user = user;
  }

  // реализую экшены
  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password); // делаю запрос
      localStorage.setItem('token', response.data.accessToken); // если запрос успешен сохраняю токен в localStorage
      this.setAuth(true); // меняю состояние
      this.setUser(response.data.user); // сохраняю данные пользователя внутри хранилища
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async registration(email: string, password: string) {
    try {
      const response = await AuthService.registration(email, password); // делаю запрос
      localStorage.setItem('token', response.data.accessToken); // если запрос успешен сохраняю токен в localStorage
      this.setAuth(true); // меняю состояние
      this.setUser(response.data.user); // сохраняю данные пользователя внутри хранилища
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout(); // делаю запрос
      localStorage.removeItem('token'); // Удаляю токен
      this.setAuth(false); // меняю состояние
      this.setUser({} as IUser); // сохраняю данные пользователя внутри хранилища
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}
```

Все логика у нас готова и теперь мы можем приступать оживлять нашу форму. Но что бы с этим **store** нам взаимодействовать еще необходимо сделать пару махинаций. Перехожу в **index.tsx**. В нем создаю объект а именно экземпляр этого класса **const store = new Store()**

![](img/003.png)

Как видите здесь есть все мутации и все экшены.

Для того что бы использовать этот **store** внутри компонента мы воспользуемся **Context API**. И с помощью функции **createContext()** этот контекст создадим. Затем какие-то данные из этого контекста мы будем получать с помощью хука **useContext**. По **default** указываем что в этом контексте у нас находится объект с единственным полем **store**.

```tsx
import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store/store';

const store = new Store();

export const Context = createContext({ store }); // в контекст по умолчанию передаю объект хранилища

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

По хорошему так же создать под это дело **interface** который будет описывать поля этого контекста. И как **generic** этот **interface** мы указывам в **createContext**.

```tsx
import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store/store';

interface State {
  store: Store;
}

const store = new Store();

export const Context = createContext<State>({ store }); // в контекст по умолчанию передаю объект хранилища

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

И далее все приложение оборачиваю в **Provider**.

```tsx
import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store/store';

interface State {
  store: Store;
}

const store = new Store();

export const Context = createContext<State>({ store }); // в контекст по умолчанию передаю объект хранилища

ReactDOM.render(
  <Context.Provider value={{ store }}>
    <App />
  </Context.Provider>,

  document.getElementById('root')
);
```

Теперь возвращаемся в компонент **LoginForm.tsx**. В нем воспользуемся хукам **useContext**. Передаю туда **Context** который мы сделали. И извлекаю объект хранилища.

```tsx
// components LoginForm.tsx
import React, { FC, useState, useContext } from 'react';
import { Context } from '../index';

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { store } = useContext(Context); //извлекаю объект хранилища

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Пароль"
      />
      <button>Логин</button>
      <button>Регистрация</button>
    </div>
  );
};

export default LoginForm;
```

Теперь спускаюсь к кнопкам и вешаю слушатель события нажатия **onClick**. При нажатии на кнопку Логин мы будем вызывать действие т.е. **action** из хранилища **store**. **Action** одноименный и называется **login**. Параметрами он ожидаем **email**, **password**. И тоже самое делаем для регистрации только вызываем **action** **registration**.

```tsx
// components LoginForm.tsx
import React, { FC, useState, useContext } from 'react';
import { Context } from '../index';

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { store } = useContext(Context); //извлекаю объект хранилища

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Пароль"
      />
      <button onClick={() => store.login(email, password)}>Логин</button>
      <button onClick={() => store.registration(email, password)}>
        Регистрация
      </button>
    </div>
  );
};

export default LoginForm;
```

```tsx
import React, { FC } from 'react';
import LoginForm from './components/LoginForm';

const App: FC = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default App;
```

```ts
// store store.js

import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import { IUser } from './../models/IUser';

export default class Store {
  user = {} as IUser; // сохраняю данные о пользователе
  isAuth = false; // авторизован ли пользователь

  constructor() {
    makeAutoObservable(this);
  }

  // мутация для изменения переменной isAuth
  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  // мутация для изменения переменной user
  setUser(user: IUser) {
    this.user = user;
  }

  // реализую экшены
  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password); // делаю запрос
      localStorage.setItem('token', response.data.accessToken); // если запрос успешен сохраняю токен в localStorage
      this.setAuth(true); // меняю состояние
      this.setUser(response.data.user); // сохраняю данные пользователя внутри хранилища
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async registration(email: string, password: string) {
    try {
      const response = await AuthService.registration(email, password); // делаю запрос
      console.log(response);
      localStorage.setItem('token', response.data.accessToken); // если запрос успешен сохраняю токен в localStorage
      this.setAuth(true); // меняю состояние
      this.setUser(response.data.user); // сохраняю данные пользователя внутри хранилища
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout(); // делаю запрос
      console.log(response);
      localStorage.removeItem('token'); // Удаляю токен
      this.setAuth(false); // меняю состояние
      this.setUser({} as IUser); // сохраняю данные пользователя внутри хранилища
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}
```

Если мы сейчас что-то введем в форму и отправим, то мы получим ошибку. Все дело в том что мы не указали в нашем сервере с каким доменом ему предстоит обмениваться **cookie**. Возвращаюсь в **server** **index.js**. И в настройках **cors** мы указываем.

Во-первых мы эти **cookie** разрешаем поле **credentials** мы устанавливаем в **true**. И во вторых нам необходимо указать **url** нашего фронта. Прописываю поле **origin: localhost:3000**.

```js
// server index.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index.js');
const errorMiddleware = require('./middlewares/error-middleware.js');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    // указываю домен скоторым придется обмениваться cookie
    credentials: true, // разрешаю cookie
    origin: process.env.CLIENT_URL, // указываю домен
  })
);
app.use('/api', router);
app.use(errorMiddleware); // всегда должен идти последним в цепочке middlewares

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Сервер запущен на порту: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
```

```
PORT=5000
DB_URL=mongodb+srv://root:4343@cluster0.2uhsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
JWT_ACCESS_SECRET=jwt-secret-key
JWT_REFRESH_SECRET=jwt-refresh-secret-key
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER=kostay375298918971@gmail.com
SMTP_PASSWORD=dd8c24e5d0639c4ab8322683f79ef57b77ebe0bbdd2ec2702b83e8afb81edd49
API_URL=http://localhost:5000
CLIENT_URL=http://localhost:3000
```

И так у меня была ошибка в определении API_URL в client http index.ts

```ts
//  http index.ts

import axios from 'axios';

export const API_URL = `http://localhost:5000/api`;

const $api = axios.create({
  withCredentials: true, // автоматический подхват cookie
  baseURL: API_URL, // базовый URL
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(`token`)}`;
  return config;
});

export default $api; // Экспортирую инстанс axios
```

![](img/004.png)

![](img/005.png)

И при логине получаю тоже самое.

Регистрация и логин готовы. Но еще уйма работы которую нам нужно сделать.
