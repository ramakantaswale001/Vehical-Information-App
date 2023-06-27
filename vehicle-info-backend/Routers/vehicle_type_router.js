const express = require('express')
const router = express.Router();
const VehicleTypeController=require('../Controllers/vehicle_type_controller');
const authValidation = require("../helpers/auth")

router.get("/get",authValidation,VehicleTypeController.getVehicleType);

router.post('/add',authValidation,VehicleTypeController.addVehicleType );

router.delete("/delete/:id",authValidation,VehicleTypeController.deleteVehicleType);

router.put("/update/:id",authValidation,VehicleTypeController.updateVehicleType)

module.exports=router;
