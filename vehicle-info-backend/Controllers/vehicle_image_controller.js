let mysqlConnect = require("../helpers/mysql-connection");
let VehicleImageValidator = require("../Validations/vehicle_image")

let getVehicleImage = (req, res) => {

  let sql = `SELECT * FROM vehicle_image`;
  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
    res.send(results)
  });
}

let addVehicleImage = (req, res) => {

  let { image_name, image_path, image_type, created } = req.body;
  console.log(req.body);

  let sql = `insert into vehicle_image (image_name, image_name, image_type, created)
     values ("${image_name}","${image_path}", "${image_type}", "${created}")`;
  console.log(sql)

  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) {
      console.log(sql)
      throw error;
    }

  });
  res.send(" data is successfully inserted  into the database");

}
let deleteVehicleImage = (req, res) => {

  let id = req.params.id;
  console.log(id)

  let sql = `delete from vehicle_image where id=${id}`;
  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
  });
  res.send(`user data of entered id - ${id} of VehicleImage router deleted`);
}

let updateVehicleImage = (req, res) => {
  let id = req.params.id;
  let updateData = req.body;
  let sql = `update vehicle_image set ? where id=${id}`;
  console.log(sql)
  mysqlConnect.query(sql, updateData, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
  });
  res.send(`this is put method and entered id ${id} of VehicleImage router`);
}

module.exports = { getVehicleImage, addVehicleImage, deleteVehicleImage, updateVehicleImage }