// middleware authMiddleware.js
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    // Вытаскиваю токен
    const token = req.headers.authorization.split(' ')[1]; // Bearer asdfghjkl
    if (!token) {
      return res.status(401).json({ message: 'Пользователь не авторизован' });
    } else {
      // Если токен есть я его декодирую
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      // в поле req.user добавляю декодированные данные
      req.user = decoded;
      next();
    }
  } catch (error) {
    res.status(401).json({ message: 'Пользователь не авторизован' });
  }
};
