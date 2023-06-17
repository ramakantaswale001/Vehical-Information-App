const express = require('express')
const router = express.Router();
const VehicleRegistrationController = require('../Controllers/vehicle_registration_controller')
const authValidation = require("../helpers/auth")

router.get("/get",authValidation,VehicleRegistrationController.getVehicleRegistration);

router.post('/add',authValidation,VehicleRegistrationController.addVehicleRegistration);

router.delete("/delete/:id",authValidation,VehicleRegistrationController.deleteVehicleRegistration);

router.put("/update/:id",authValidation,VehicleRegistrationController.updateVehicleRegistration)

module.exports=router;
