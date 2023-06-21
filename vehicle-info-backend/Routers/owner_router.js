const express = require('express')
const router = express.Router();
const ownerController=require('../Controllers/owner_controller');
const authValidation = require("../helpers/auth")

router.get("/get",authValidation,ownerController.getOwner);

router.post('/addOwner',authValidation,ownerController.addOwner );

router.delete("/delete/:id",authValidation,ownerController.deleteOwner);

router.put("/update/:id",authValidation,ownerController.updateOwner)

module.exports=router;
