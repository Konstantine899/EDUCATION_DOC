// controller userController.js
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Basket } = require('../models/models');

const generateJWT = (id, email, role) => {
  return jwt.sign(
    { id, email, role },

    process.env.SECRET_KEY,
    {
      expiresIn: '24h',
    }
  );
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;

    // Проверка ввода email и password если значения пусты генерируем ошибку
    if (!email || !password) {
      return next(ApiError.badRequest('Не корректный email или пароль'));
    }

    // Проверка существования пользователя с таим email
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.badRequest(`Пользватель с таким email уже сужествует`)
      );
    } else {
      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({ email, role, password: hashPassword }); // создаю пользователя
      const basket = await Basket.create({ userId: user.id }); // создаю корзину пользователя
      // создаю token
      const token = generateJWT(user.id, user.email, user.role);
      return res.json({ token });
    }
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    // ищу пользователя
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(
        ApiError.internal(`Пользователь с таким ${email} не найден `)
      );
    }
    // сравниваю пароли
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.badRequest(`указан не верный пароль`));
    }
    // генерирую новый токен
    const token = generateJWT(user.id, user, email, user.role);
    return res.json({ token });
  }

  async check(req, res, next) {
    // const { id } = req.query;
    // if (!id) {
    //   return next(ApiError.badRequest('Не задан ID'));
    // }
    // res.json(id);
  }
}

module.exports = new UserController();
