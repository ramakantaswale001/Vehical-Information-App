const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const validateSchema = Joi.object({
  first_name: Joi.string().min(3).max(30).required(),
  last_name: Joi.string().required(), 
  email: Joi.string().required(), 
  phone_no: Joi.number().integer().required(),
  company_name:Joi.string().required(),
  type_of_business:Joi.string().required(),
  estb_yr:Joi.string().required(),
  company_description:Joi.string().required(),
  office_address:Joi.string().required()
});


exports.validateSchema = validator(validateSchema)