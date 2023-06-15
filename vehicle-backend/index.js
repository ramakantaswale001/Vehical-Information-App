const express = require("express");
const app = express();
const cors = require('cors')

const port = 5050;
const bodyParser = require("body-parser");

const ownerRegistrationRouter = require("./Routers/owner_registration_router");
const vehicleRegistrationRouter = require("./Routers/vehicle_registration_router");
const userRouter = require("./Routers/user_router")

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

let  corsOptions = {
  origin: process.env.FE_BASEURL,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.use("/ownerRegistration", ownerRegistrationRouter);
app.use("/vehicleRegistration", vehicleRegistrationRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});