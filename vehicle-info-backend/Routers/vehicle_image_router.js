const express = require('express')
const router = express.Router();
const VehicleImageController=require('../Controllers/vehicle_image_controller');
const authValidation = require("../helpers/auth")

router.get("/get",authValidation,VehicleImageController.getVehicleImage);

router.post('/add',authValidation,VehicleImageController.addVehicleImage );

router.delete("/delete/:id",authValidation,VehicleImageController.deleteVehicleImage);

router.put("/update/:id",authValidation,VehicleImageController.updateVehicleImage)

module.exports=router;
