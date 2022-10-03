const JWT = require('../utils/JWT');

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;

  const user = await JWT.authenticateToken(token);

  if (!user) {
    const error = { status: 401, message: 'Expired or invalid token' };
    throw error;
  }

  req.locals = user;
  next();
};

module.exports = authMiddleware;