const { User } = require('../models');
const { validateUserInfo } = require('../utils/JOI');
const { generateToken } = require('../utils/JWT');

const addUser = async (body) => {
  const JOIvalidation = validateUserInfo(body);
  console.log('SERVICE JOI', JOIvalidation);

  if (JOIvalidation.error) return { status: 400, message: JOIvalidation.error.details[0].message };

  const checkEmail = await User.findOne({
    where: { email: body.email },
  });

  if (checkEmail) return { status: 409, message: 'User already registered' };

  const newUser = await User.create(body);

  const findNewUser = await User.findOne({
    attributes: ['id', 'email', 'display_name'],
    where: newUser.dataValues,
  });

  const newToken = generateToken(findNewUser);
  return { token: newToken };
};

module.exports = {
  addUser,
};

// {
//   "displayName": "Brett Wiltshire",
//   "email": "brett@email.com",
//   "password": "123456",
//   "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
// }