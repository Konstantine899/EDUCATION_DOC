// middlewares auth-middleware.js
const ApiError = require('../exceptions/api-error.js');
const tokenService = require('../service/token-service.js');

module.exports = function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(ApiError.UnauthorizedError());
    } else {
      const accessToken = authorizationHeader.split(' ')[1]; // разбиваю строку на два элемента массива и 1-м индексом достаю token
      if (!accessToken) {
        return next(ApiError.UnauthorizedError());
      }
      const userData = tokenService.validateAccessToken(accessToken); // валидирую accessToken
      if (!userData) {
        return next(ApiError.UnauthorizedError());
      } else {
        req.user = userData; // Помещаю данные в поле user пользователя котороые вытащил из token
        next(); // передаю управление следующему middleware
      }
    }
  } catch (e) {
    return next(ApiError.UnauthorizedError());
  }
};
