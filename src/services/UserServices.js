const { User } = require('../models');

const getUserByUsername = (username) => User.findOne({
  where: { username },
});

module.exports = {
  getUserByUsername,
};