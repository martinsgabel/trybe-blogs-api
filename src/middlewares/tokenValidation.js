const JWT = require('../utils/JWT');

const authMiddleware = async (req, _res, next) => {
  const { token } = req.headers;

  const user = await JWT.authenticateToken(token);

  if (!user) {
    const error = { status: 401, message: 'Expired or invalid token' };
    throw error;
  }

  req.locals = user;
  return next();
};

module.exports = authMiddleware;