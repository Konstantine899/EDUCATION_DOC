// controllers typeController
const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');
class TypeController {
  // Создаю тип
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }

  // Получаю все типы
  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
}

module.exports = new TypeController();
