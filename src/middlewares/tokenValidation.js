const JWT = require('../utils/JWT');

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  console.log(authorization);

  try {
    const user = JWT.authenticateToken(authorization);
    req.locals = user;
  } catch (error) {
    next(error);
    // const error = { status: 401, message: 'Expired or invalid token' };
  }
  return next();
};

module.exports = authMiddleware;