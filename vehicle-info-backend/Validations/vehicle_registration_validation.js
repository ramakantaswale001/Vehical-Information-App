const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const validateSchema = Joi.object({ 
  select_vehicle:Joi.string().required(),
  seating_capacity:Joi.string().required(),
  AC_NonAC:Joi.string().required(),
  rate_per_km:Joi.string().required()
});

exports.validateSchema = validator(validateSchema)