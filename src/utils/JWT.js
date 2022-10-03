const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'suaSenhaSecreta';

const generateToken = ({ id, displayName, email }) => {
  const payload = {
    id,
    email,
    displayName,
  };

  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

  return token;
};

const authenticateToken = async (token) => {
  if (!token) {
    const status = 401;
    const message = 'Token not found';
    const error = { status, message };
    throw error;
  }

  try {
    const validateToken = jwt.verify(token, JWT_SECRET);
    return validateToken;
  } catch (error) {
    const status = 401;
    const message = 'Expired or invalid token';
    const err = { status, message };
    throw err;
  }
};

module.exports = {
  generateToken,
  authenticateToken,
};