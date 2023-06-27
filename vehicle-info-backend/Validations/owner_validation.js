const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const validateSchema = Joi.object({
  first_name: Joi.string().min(3).max(30).required(),
  last_name: Joi.string().required(), 
  owner_dob: Joi.string().required(), 
  contact_email: Joi.string().required(),
  contact_phone_no:Joi.number().required(),
  business_phone_no:Joi.number().required(),
  business_email:Joi.string().required(),
  pin_code:Joi.string().required(),
  state:Joi.string().required(),
  company_name:Joi.string().required(),
  organization_name:Joi.string().required(),
  type_of_business_id :Joi.string().required(),
  registration_date:Joi.string().required(),
  company_description:Joi.string().required(),
  office_address:Joi.string().required(),
  office_city:Joi.string().required(),
  office_state:Joi.string().required(),
  office_country:Joi.string().required(),
  GST_number:Joi.string().required(),
  created:Joi.string().required(),
  modified:Joi.string().required(),
});


exports.validateSchema = validator(validateSchema)