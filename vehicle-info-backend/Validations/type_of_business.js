const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const validateSchema = Joi.object({ 
  type:Joi.string().required(),
  created:Joi.string().required()
});

exports.validateSchema = validator(validateSchema)