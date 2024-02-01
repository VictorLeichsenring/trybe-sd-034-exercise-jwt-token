const { UserService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const login = async (req, res) => {
  const { username, password } = req.body;
  const { status, data } = await userService.login({ username, password });
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  login,
};