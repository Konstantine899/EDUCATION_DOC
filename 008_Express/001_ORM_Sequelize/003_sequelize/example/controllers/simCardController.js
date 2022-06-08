// controllers simCardController.js
const SimCards = require('../models/simCardModel'); // Модель

exports.addSimCard = function (req, res) {
  res.render('create.hbs');
};

exports.getSimCards = function (req, res) {
  res.render('simCards.hbs', {
    listSimCards: SimCards.getAll(),
  });
};

exports.postSimCard = function (request, response) {
  const operator = request.body.operator;
  const number = request.body.number;
  const sim = new SimCards(operator, number);
  sim.save();
  response.redirect('/cards');
};
