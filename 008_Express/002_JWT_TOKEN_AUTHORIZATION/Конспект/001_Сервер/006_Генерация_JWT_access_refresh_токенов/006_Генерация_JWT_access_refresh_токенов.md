# 006 Генерация JWT access refresh токенов

Перехожу в **token-service.js**. Реализую функцию которая нам будет генерировать пару **token**. **Access** **token** и **Refresh** **token** соответственно.
Создаю функию **generateTokens**. Параметром данная функция будет принимать некий **payload** который мы будем прятать в **token** - это соответственно те самые данные которые в **token** вшиваются.

Мне понадобится модуль **jsonwebtoken** который мы установили чуть ранее.

```js
//service token-service.js

const jwt = require('jsonwebtoken');

class TokenService {
  generateToken(payload) {}
}

module.exports = new TokenService();
```

В первую очередь сгенерируем **accessToken**. Делаю для переменно одноименное название. И у **jwt** вызываю функцию **sing()**. Первым параметром я как раз передаю **payload**. Вторым параметром необходимо передать секретный ключ.

![](img/001.png)

```js
//service token-service.js

const jwt = require('jsonwebtoken');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload);
  }
}

module.exports = new TokenService();
```

Секретный ключ я выношу в .env т.е. в наш кофиг. Создаю переменную **JWT_ACCESS_SECRET** в которую помещаю абсолютно рандомную строку. Т.е. Для создания ключа я могу использовать абсолютно рандомную строку. Главное что-бы ее ни кто не знал. Так же сделаю сразуже ключ и для **refresh** **token**.

```env
PORT=5000
DB_URL=mongodb+srv://root:4343@cluster0.2uhsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
JWT_ACCESS_SECRET=jwt-secret-key
JWT_REFRESH_SECRET=jwt-refresh-secret-key
```

И возвращаюсь обратно в **token-service.js**. Теперь я указываю вторым параметром этот секретный ключ который получаю из конфигурационного файла.

```js
//service token-service.js

const jwt = require('jsonwebtoken');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {});
  }
}

module.exports = new TokenService();
```

Так же третьим параметром можно передать некоторые параметры для генерации токена. Здесь мы укажем время жизни этого токена. Оно указывается в поле **expiresIn:** Здесь можно сделать 15 или 30 мин. Здесь уже по желанию, в зависимости от того на сколько секретные данные содержаться в вашем сервисе. Пока что остановлюсь на 30m.

```js
//service token-service.js

const jwt = require('jsonwebtoken');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '30m',
    });
  }
}

module.exports = new TokenService();
```

Генерирую сразу же второй токен. Здесь указываю свой секретный ключ **process.env.JWT_REFRESH_SECRET** и время жизни 30 дней.

```js
//service token-service.js

const jwt = require('jsonwebtoken');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: '30d',
    });
  }
}

module.exports = new TokenService();
```

Т.е если пользователь не заходил на наш сервис 30 дней, то ему придеться заново логинеться.

И по итогу из функции мы возвращаем объект в который кладем **accessToken** и **refreshToken** соотвтетственно.

```js
//service token-service.js

const jwt = require('jsonwebtoken');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: '30d',
    });
    return {
      accessToken,
      refreshToken,
    };
  }
}

module.exports = new TokenService();
```

Так же сразу реализую функцию которая будет сохранять **refreshToken** в БД для конкретного пользователя. Для этого у нас есть модель которую мы создавали в начеле ролика. Она называется **token-model.js**. Импортирую в **token-service.js**.

![](img/002.png)

```js
//service token-service.js

const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token-model.js');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: '30d',
    });
    return {
      accessToken,
      refreshToken,
    };
  }
}

module.exports = new TokenService();
```

Внутри сервиса создаю новую функцию и называю ее **saveToken()**. параметрами эта функция будет принимать **useId** и непосредственно сам **refreshToken**.

```js
//service token-service.js

const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token-model.js');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: '30d',
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId, refreshToken) {}
}

module.exports = new TokenService();
```

Перед тем как сохранять токен мы сначала попробуем найти по такому **useId** токен в БД. Обращаюсь к модели **await** **TokenModel.findOne()** И передаю туда как поле **{user: userId}**.

```js
//service token-service.js

const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token-model.js');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: '30d',
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({ user: userId });
  }
}

module.exports = new TokenService();
```

> **Здесь важное замечание что при таком подходе у нас в БД по одному пользователю всегда находится один токен. И при попытке зайти на акаунт с другого устройства. С того устройсва с которого вы были залогинены вас выкенет. Поскольку токен перепишется и в БД будет новый токен**.

Теперь сделаем проверку что если мы в БД что-то нашли. Тогда мы у этого поля, а у нас это **tokenData**, перезаписываем **refreshToken** т.е. userId у нас остается, а **refreshToken** мы перезаписываем. И далее вызываю функцию **save** для того что бы **refreshToken** в БД обновился.

```js
//service token-service.js

const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token-model.js');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: '30d',
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken; // если в БД нашел токен, то перезаписываю
      return tokenData.save(); // сохраняю новый токен
    }
  }
}

module.exports = new TokenService();
```

Если же это условие не выполнилось вероятно пользователь логинется первый раз и записи с его **userId** в БД нет. Поэтому нам необходимо ее создать. Создаю переменную **token**. Далее обращаюсь к модели **tokenModel** у нее вызываю функцию **create()** в которую передаю поле **{user: useId, refreshToken}**. И далее созданный токен из функции мы возвращаем.

```js
//service token-service.js

const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token-model.js');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: '30d',
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken; // если в БД нашел токен, то перезаписываю
      return tokenData.save(); // сохраняю новый токен
    } else {
      // если userId не найден вероятно он логинется первый раз
      const token = await tokenModel.create({ user: userId, refreshToken });
      return token; // возвращаю созданный token
    }
  }
}

module.exports = new TokenService();
```

Таким образом после того как пользователь залогинелся или зарегистрировался. Мы сразу генерируем для него пару токенов и **refreshToken** сохраняем в БД по **userId**.

И так возвращаемся обратно к функции регистрации. И теперь нам эти токены необходимо сгенерировать. Поэтому сюда **user-service.js**, импортирую **token-service.js**.

```js
//service user-service.js

const userModel = require('../models/user-model.js');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service.js');
const tokenService = require('./token-service.js');

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
    }
  }
}

module.exports = new UserService();
```

И у этого **tokenService** дергаю функцию **generateToken**. Она вернет нам пару токенов **accessToken** и **refreshToken**. и помещаю все это дело в объект **tokens**. Параметром в функцию **generateToken** нужно передать некий **payload**. Это будет некоторая информация о пользователе. Но мы не должны помещать туда пароль и какую либо еще постороннюю информацию.

![](img/003.png)

```js
//service user-service.js

const userModel = require('../models/user-model.js');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service.js');
const tokenService = require('./token-service.js');

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
      const tokens = tokenService.generateToken(); // помещаю accessToken и refreshToken в объект
    }
  }
}

module.exports = new UserService();
```

В папке **server** создаю папку **dtos** и внутри нее создадим класс который будет называться **user-dto.js**. Это будет простой класс который обладает некоторыми полями которые мы будет отправлять на **client**. DTO расшифровывается как **data** **transfer** **object** (объект передачи данных).

```js
//server dtos user-dto.js

module.exports = class UserDto {
  email;
  id; // id пользователя
  isActivated; // флаг который говорит о том что акаунт активирован или нет
};
```

Так же создадим конструктор который будет принимать параметром модель. И из этой модели мы достаем поля которые нас интересуют.

```js
//server dtos user-dto.js

module.exports = class UserDto {
  email;
  id; // id пользователя
  isActivated; // флаг который говорит о том что акаунт активирован или нет

  // далее в конструкторе достаю нужные мне значения из модели
  constructor(model) {
    this.email = model.email;
    this.id = model._id; // MongoDB по умолчанию добавляет нижнее подчеркивание для того что бы обозначить что это поле не изменяемое мыже его удаляем
    this.isActivated = model.isActivated;
  }
};
```

**user-dto.js** готов. Теперь возвращаюсь к **user-service.js**.

На основании модели мы теперь эту dto создадим что бы выкинуть из модели не нужные поля. Но для того что бы нам это сделать нам необходимо класс **UserDto** сюда импортировать.

Далее перед объектом **tokens** создаю переменную **userDto** в которую помещаю результат экземпляр класса **new UserDto()** и как параметр в конструктор мы передаем модель. Модель у нас это просто объект **user**.

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

      const useDto = new UserDto(user);
      const tokens = tokenService.generateToken(); // помещаю accessToken и refreshToken в объект
    }
  }
}

module.exports = new UserService();
```

По идее эта **useDto** будет обладать всего 3-мя полями **id**, **email**, **isActivated**. И ее, **useDto**, мы можем использовать как **payload**.

Функция **generateToken** на вход ожидает обычный объект а не инстанс **userDto**. Поэтому мы просто деструктурируем эту **userDto** в новый объект.

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

      const useDto = new UserDto(user); // id, email, isActivated
      const tokens = tokenService.generateToken({ ...useDto }); // помещаю accessToken и refreshToken в объект
    }
  }
}

module.exports = new UserService();
```

Если мы сейчас через точку обратимся к токенам, то увидим два поля.

![](img/004.png)

По плану теперь нам необходимо **refreshToken** сохранить в БД. **await** **tokenService** вызываю функцию **saveToken()**. В первом параметре обращаюсь к **userDto** и передаю **id** пользователя. А вторым параметром обращаюсь к объекту **tokens** и обращаюсь к его ключу **refreshToken** готорый мы чуть ранее сгенерировали.

![](img/005.png)

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
      const tokens = tokenService.generateToken({ ...useDto }); // помещаю accessToken и refreshToken в объект
      await tokenService.saveToken(userDto.id, tokens.refreshToken);
    }
  }
}

module.exports = new UserService();
```

И на этом логика регистрации закончена. Остается из этой функции вернуть некоторые данные.

Возвращаю объект. В него добавляю **accessToken** и **refreshToken** разворячивая с помощью оператора **spreed** объект **tokens**. И так же как поле **user:** добавлю **useDto** т.е. помимо токенов мы будем отправлять и информацию о пользователе.

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
      const tokens = tokenService.generateToken({ ...useDto }); // помещаю accessToken и refreshToken в объект
      await tokenService.saveToken(userDto.id, tokens.refreshToken);

      return { ...tokens, user: userDto };
    }
  }
}

module.exports = new UserService();
```

Теперь перехожу в **use-controller.js**. В функии **registration** поработаем с **http** составляющей. Во-первых из тела запроса **req.body** ватаскиваю **email** и **password**

```js
// controllers user-controller.js

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body;
    } catch (e) {}
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

После чего этот **email** и **password** нам необходимо передать в функцию регистрации. Для этого импортирую его.

```js
// controllers user-controller.js

const userService = require('../service/user-service.js');
class UserController {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body;
    } catch (e) {}
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

Создаю переменную **userData**. В нее результат асинхронной функции поэтому добавляю **await** обращаюсь к **userService** и вызываю функцию **registration()** в которую передаю **email** и **password**.

```js
// controllers user-controller.js

const userService = require('../service/user-service.js');
class UserController {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);
    } catch (e) {}
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

Эта функция нам возвращает токены и информацию о пользователе. Поэтому нам ее необходимо вернуть на клиент т.е. отправить в браузер.
Вызываю у **res** функцию **json** и передаем туда эти данные.

```js
// controllers user-controller.js

const userService = require('../service/user-service.js');
class UserController {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);
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

Так же в начале ролика мы обсуждали что **refreshToken** будем хранить в **cookie**. У res вызываю функцию **cookie**, первым параметром передаю ключ по какому этот **cookie** будет сохраняться **'refreshToken'**, а вторым параметром передаю саму **cookie** т.е. наш **userData.refreshToken**.

```js
// controllers user-controller.js

const userService = require('../service/user-service.js');
class UserController {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);
      res.cookie('refreshToken', userData.refreshToken, {});
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

Так же напомню для того что бы эта конструкция работала **res.cookie('refreshToken', userData.refreshToken, {});**
Нам необходимо подключить вот этот middleware **app.use(cookieParser());**

![](img/006.png)

Мы это сделали в начаде ролика.

Третьим параметром укажем некоторые опции. **maxAge:** укажем что она будет жить к примеру 30 дней. Но напрямую указать я его не могу. Поэтому дни умножаю на 24 часа на 60 мин на 60 сек и на 1000 милисекунд.

И самый важный момент это указать флаг **httpOnly:** true что бы эту **cookie** нельзя было изменять и получать внутри браузера из **JS**. Если вы используете **https** вы можете добавить флаг **sequir** так же в значение **true**.

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
        httpOnly,
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

И так в следующей части нашел пару синтаксических ошибок и httpOnly не было выставлено в true вот рабочие файлы

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

Это наверное была самая сложная часть.
