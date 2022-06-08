//user-model.js
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false }, // если пользователь перешел по ссылке и подтверил почту то true
  activationLink: { type: String },
});

module.exports = model('User', UserSchema);
