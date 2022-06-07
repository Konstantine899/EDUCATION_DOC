// controller userController.js
class UserController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res) {
    res.json('Опять проврка');
  } // проверка авторизован пользователь или нет
}

module.exports = new UserController();
