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

function verify(token) {
  const payload = jwt.verify(token, JWT_SECRET);
  return payload;
}

module.exports = {
  createToken,
  verify,
};