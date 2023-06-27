const Joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const validateSchema = Joi.object({ 
    image_name:Joi.string().required(),
    image_path:Joi.string().required(),
    image_type:Joi.string().required(),
    created:Joi.string().required()
});

exports.validateSchema = validator(validateSchema)