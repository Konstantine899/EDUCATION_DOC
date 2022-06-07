// controllers deviceController.js
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');

const { Device, DeviceInfo } = require('../models/models');

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) =>
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          })
        );
      }

      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res, next) {
    let { brandId, typeId, page, limit } = req.query;

    page = page || 1;
    limit = Number(limit) || 9; // Для того что бы нормально отработало переведи в Number
    let offset = page * limit - limit;
    let devices;

    try {
      // если brandId и typeId не указаны возвращаю все devices
      if (!brandId && !typeId) {
        devices = await Device.findAndCountAll({ limit, offset });
      }

      //Фильтрация по brandId
      if (brandId && !typeId) {
        devices = await Device.findAndCountAll({
          where: { brandId },
          limit,
          offset,
        });
      }
      // Фильтрация по typeId
      if (!brandId && typeId) {
        devices = await Device.findAndCountAll({
          where: { typeId },
          limit,
          offset,
        });
      }

      //Фильтрация по typeId и по typeId
      if (brandId && typeId) {
        devices = await Device.findAndCountAll({
          where: { brandId, typeId },
          limit,
          offset,
        });
      }
      // возвращаю массив девайсов
      return res.json(devices);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getOne(req, res, next) {
    const { id } = req.params;
    try {
      const device = await Device.findOne({
        where: Number(id),
        include: [{ model: DeviceInfo, as: 'info' }],
      });
      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new DeviceController();
