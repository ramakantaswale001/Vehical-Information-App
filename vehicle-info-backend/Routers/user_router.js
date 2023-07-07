const express = require('express')
const router = express.Router();
const userController=require('../Controllers/user_controller');
const authValidation = require("../helpers/auth")


router.get("/get",userController.getUser);

router.get("/getuserbyid/:id",authValidation,userController.getUserById)

router.post("/login",userController.userLogin)

router.post("/logout",userController.userLogOut)

router.post("/adduser",userController.addUser);

router.delete("/delete/:id",userController.deleteUser);

router.put("/update/:id",userController.updateUser)

module.exports=router;