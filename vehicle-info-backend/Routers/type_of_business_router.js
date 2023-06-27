const express = require('express')
const router = express.Router();
const TypeOfBusinessController=require('../Controllers/type_of_business_controller');
const authValidation = require("../helpers/auth")

router.get("/get",authValidation,TypeOfBusinessController.getTypeOfBusiness);

router.post('/add',authValidation,TypeOfBusinessController.addTypeOfBusiness );

router.delete("/delete/:id",authValidation,TypeOfBusinessController.deleteTypeOfBusiness);

router.put("/update/:id",authValidation,TypeOfBusinessController.updateTypeOfBusiness)

module.exports=router;
