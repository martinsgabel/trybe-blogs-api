const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const login = async (body) => {
  console.log('SERVICE BODY HERE', body);

  if (!body.email || !body.password) {
    return { status: 400, message: 'Some required fields are missing' };
  }

  const { email, password } = body;

  const user = await User.findOne({
    attributes: ['id', 'email', 'display_name'],
    where: { email, password },
  });

  if (!user) return { status: 400, message: 'Invalid fields' };

  const token = generateToken(user.dataValues);

  return { token };
};

module.exports = {
  login,
};
