# PostMan Тестирование функции регистрации

Открываю postman и давайте убедимся что эта функция работает.

![](img/001.png)

И так пользователь создавался но не создавался токен. Исправил два файла.

```js
//service user-service.js

const userModel = require('../models/user-model.js');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service.js');
const tokenService = require('./token-service.js');
const UserDto = require('../dtos/user-dto.js');

class UserService {
  async registration(email, password) {
    const candidate = await userModel.findOne({ email });
    if (candidate) {
      throw new Error(`Пользователь с таким ${email} уже существует`);
    } else {
      const hashPassword = await bcrypt.hash(password, 3);
      const activationLink = uuid.v4();
      const user = await userModel.create({
        email,
        password: hashPassword,
        activationLink,
      });
      await mailService.sendActivationMail(email, activationLink);

      const userDto = new UserDto(user); // id, email, isActivated
      const tokens = tokenService.generateToken({ ...userDto }); // помещаю accessToken и refreshToken в объект
      await tokenService.saveToken(userDto.id, tokens.refreshToken);

      return { ...tokens, user: userDto };
    }
  }
}

module.exports = new UserService();
```

```js
// controllers user-controller.js

const userService = require('../service/user-service.js');
class UserController {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }

  async login(req, res, next) {
    try {
    } catch (e) {}
  }

  async logout(req, res, next) {
    try {
    } catch (e) {}
  }

  async activate(req, res, next) {
    try {
    } catch (e) {}
  }

  async refresh(req, res, next) {
    try {
    } catch (e) {}
  }

  async getUsers(req, res, next) {
    try {
      res.json(['123', '456']);
    } catch (e) {}
  }
}

module.exports = new UserController();
```

И вот что я получаю

![](img/002.png)

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIzQG1haWwucnUiLCJpZCI6IjYxMDI4ZDU0NTkxZWQ0MmM4ODJiNWMxYSIsImlzQWN0aXZhdGVkIjpmYWxzZSwiaWF0IjoxNjI3NTU3MjA0LCJleHAiOjE2Mjc1NTkwMDR9.w5pO3pvlY08nJPWhhgWaPGVzFGBAxiJ3_Xh3m_5IP-Q",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIzQG1haWwucnUiLCJpZCI6IjYxMDI4ZDU0NTkxZWQ0MmM4ODJiNWMxYSIsImlzQWN0aXZhdGVkIjpmYWxzZSwiaWF0IjoxNjI3NTU3MjA0LCJleHAiOjE2MzAxNDkyMDR9.YZW4SkO7VUX9pyAWTH2GH6zFLa2-sxDXd-hAGoGzZl8",
  "user": {
    "email": "user3@mail.ru",
    "id": "61028d54591ed42c882b5c1a",
    "isActivated": false
  }
}
```

Далее прехожу <https://jwt.io>

Копирую свой **refreshToken** токен и декодирую его.

![](img/003.png)

Видим тот **email** который мы указали, **id** который сгенерировало **MongoDB** и то что акаунт не активирован **isActivated: false**. Т.е. токен у нас валидный и все прошло как надо.

Так же если я сейчас открою **MongoDB** пи перейду в коллекции.

У меня есть две коллекции.

В **tokens** у меня сохранен один **refreshToken**

![](img/004.png)

А в коллекции **users** как раз сохранены мои пользователи. Т.е. пользователи в БД сохранялись но на клиент не выводились.

![](img/005.png)
