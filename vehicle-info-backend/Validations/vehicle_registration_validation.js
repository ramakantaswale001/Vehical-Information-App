const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const validateSchema = Joi.object({ 
  vehicle_type_id :Joi.string().required(),
  seating_capacity:Joi.string().required(),
  vehicle_image_id :Joi.string().required(),
  type_of_vehicle:Joi.string().required(),
  rate_per_km:Joi.string().required(),
  rent_amount:Joi.string().required(),
  owner_id :Joi.string().required()
});

exports.validateSchema = validator(validateSchema)