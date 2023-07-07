const express = require("express");
const app = express();
const cors = require('cors')

const port = 5000;
const bodyParser = require("body-parser");

const ownerRouter = require("./Routers/owner_router");
const VehicleTypeRouter = require("./Routers/vehicle_type_router")
const VehicleImageRouter = require("./Routers/vehicle_image_router")
const TypeOfBusinessRouter = require("./Routers/type_of_business_router")
const vehicleRegistrationRouter = require("./Routers/vehicle_registration_router");
const userRouter = require("./Routers/user_router")

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

let corsOptions = {
  origin: process.env.FE_BASEURL,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.use("/owner", ownerRouter);
app.use("/vehicle_type", VehicleTypeRouter)
app.use("/vehicle_image", VehicleImageRouter)
app.use("/type_of_business", TypeOfBusinessRouter)
app.use("/vehicleRegistration", vehicleRegistrationRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});