//router index.js
const Router = require('express').Router;
const userController = require('../controllers/user-controller.js');
const router = new Router();
const { body } = require('express-validator');

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout); // выход из акаунта

router.get('/activate/:link', userController.activate); //активация акаунта по ссылке
router.get('/refresh', userController.refresh); // перезаписывает access токен
router.get('/users', userController.getUsers); // получение списка пользователей

module.exports = router;
