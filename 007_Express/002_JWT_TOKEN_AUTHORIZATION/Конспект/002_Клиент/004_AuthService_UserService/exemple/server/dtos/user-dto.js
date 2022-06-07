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
