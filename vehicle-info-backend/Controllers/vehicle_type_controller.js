let mysqlConnect = require("../helpers/mysql-connection");
let VehicleTypeValidator = require("../Validations/vehicle_type")

let getVehicleType = (req, res) => {

  let sql = `SELECT * FROM vehicle_type`;
  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
    res.send(results)
  });
}

let addVehicleType = (req, res) => {

  let { type, created } = req.body;
  console.log(req.body);

  let sql = `insert into vehicle_type (type ,created )
     values ("${type}","${created}")`;
  console.log(sql)

  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) {
      console.log(sql)
      throw error;
    }

  });
  res.send(" data is successfully inserted  into the database");

}
let deleteVehicleType = (req, res) => {

  let id = req.params.id;
  console.log(id)

  let sql = `delete from vehicle_type where id=${id}`;
  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
  });
  res.send(`user data of entered id - ${id} of VehicleType router deleted`);
}

let updateVehicleType = (req, res) => {
  let id = req.params.id;
  let updateData = req.body;
  let sql = `update vehicle_type set ? where id=${id}`;
  console.log(sql)
  mysqlConnect.query(sql, updateData, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
  });
  res.send(`this is put method and entered id ${id} of VehicleType router`);
}

module.exports = { getVehicleType, addVehicleType, deleteVehicleType, updateVehicleType }