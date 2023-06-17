const express = require('express')
const router = express.Router();
const ownerRegistrationController=require('../Controllers/owner_registration_controller');
const authValidation = require("../helpers/auth")

router.get("/get",authValidation,ownerRegistrationController.getOwnerRegistration);

router.post('/addOwner',authValidation,ownerRegistrationController.addOwnerRegistration );

router.delete("/delete/:id",authValidation,ownerRegistrationController.deleteOwnerRegistration);

router.put("/update/:id",authValidation,ownerRegistrationController.updateOwnerRegistration)

module.exports=router;
