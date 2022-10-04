const Joi = require('joi');

const validateUserInfo = ({ displayName, password, email }) =>
  Joi.object({
    displayName: Joi.string().min(8).required()
    .messages({
      'string.min': '"displayName" length must be at least 8 characters long',
      'string.required': '"username" is required',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': '"password" length must be at least 6 characters long',
      'string.required': '"password" is required',
    }),
    email: Joi.string()
    .regex(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i).required()
    .messages({
      'string.pattern.base': '"email" must be a valid email',
      'string.required': '"email" is required',
    }),
  }).validate({ displayName, password, email });

module.exports = {
  validateUserInfo,
};

// email: Joi.string().email(
//   { 
//     minDomainSegments: 2, 
//     tlds: { allow: ['com', 'net'] },
//   },
//   )
//   .messages({
//     '': '"email" must be a valid email',
//     '': '"email" is required',
//   }),