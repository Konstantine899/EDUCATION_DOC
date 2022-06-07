// models simCardModel.js
const simCards = [];

module.exports = class SimCards {
  constructor(operator, number) {
    this.operator = operator;
    this.number = number;
  }

  save() {
    simCards.push(this);
  }
  static getAll() {
    return simCards;
  }
};
