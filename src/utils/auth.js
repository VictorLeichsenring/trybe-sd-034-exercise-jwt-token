const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const JWT_CONFIG = {
  algorithm: 'HS256', 
  expiresIn: '1h', 
};

function createToken(payload) {
  const token = jwt.sign(payload, JWT_SECRET, JWT_CONFIG);
  return token;
}

module.exports = {
  createToken,
};