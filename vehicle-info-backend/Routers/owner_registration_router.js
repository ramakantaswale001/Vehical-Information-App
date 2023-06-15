const express = require('express')
const router = express.Router();
const ownerRegistrationController=require('../Controllers/owner_registration_controller');
const authValidation = require("../helpers/auth")

router.get("/get",authValidation,ownerRegistrationController.getOwnerRegistration);

router.post('/post',authValidation,ownerRegistrationController.addOwnerRegistration );

router.delete("/delete/:id",authValidation,ownerRegistrationController.deleteOwnerRegistration);

router.put("/update/:id",authValidation,ownerRegistrationController.updateOwnerRegistration)

module.exports=router;

// http://127.0.0.1:8080/user/userlist
// http://127.0.0.1:8080/user/101/ram
// http://127.0.0.1:8080/user/101