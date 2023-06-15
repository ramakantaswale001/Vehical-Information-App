const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const validateSchema = Joi.object({
  firstName: Joi.string().min(3).max(30).required(),
  lastName:Joi.string().min(3).max(30).required(),
  email: Joi.required(), 
  password: Joi.string().required(),
  phone_no: Joi.number().integer().required(),
  address:Joi.string().required(),
  pin_code:Joi.string().required()
});

exports.validateSchema = validator(validateSchema)