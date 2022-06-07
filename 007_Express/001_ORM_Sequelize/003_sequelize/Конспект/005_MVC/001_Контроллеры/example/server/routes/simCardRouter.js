// router simCardRouter.js
const express = require('express');
const simCardController = require('../controllers/simCardController');
const simCardRouter = express.Router();

simCardRouter.use('/create', simCardController.addSimCard);
simCardRouter.use('/', simCardController.getSimCards);

module.exports = simCardRouter;
