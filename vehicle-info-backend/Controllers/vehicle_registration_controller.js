let mysqlConnect = require("../helpers/mysql-connection");
let vehicleRegistrationValidator = require("../Validations/vehicle_registration_validation")

let getVehicleRegistration=(req,res)=>{

    let sql =`SELECT * FROM vehicle_registration`;
    mysqlConnect.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
      res.send(results)
    });
}

let addVehicleRegistration= (req, res) => {

  const {error,value}=vehicleRegistrationValidator.validateSchema(req.body)

  if (error) {
    console.log(error)
    return res.status(404).send(error.details)
  }

    let {select_vehicle,seating_capacity,AC_NonAC}=req.body;
    console.log(req.body);

    let sql =`insert into VehicleRegistration (select_vehicle,seating_capacity,AC_NonAC)
     values ("${select_vehicle}","${seating_capacity}","${AC_NonAC}"`;
     console.log(sql)

    mysqlConnect.query(sql, function (error, results, fields) {
        if (error){
            console.log(sql)
            throw error;
        } 

      });
    res.send(" data is successfully inserted  into the database");

}
let deleteVehicleRegistration=(req,res)=>{

    let id =req.params.id;
    console.log(id)

    let sql = `delete from VehicleRegistration where id=${id}`;
    mysqlConnect.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
      });
    res.send(`user data of entered id - ${id} of VehicleRegistration router deleted`);
}

let updateVehicleRegistration=(req,res)=>{
    let id=req.params.id;
    let updateData=req.body;
    let sql = `update comment set ? where id=${id}`;
    console.log(sql)
    mysqlConnect.query(sql,updateData, function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
      });
    res.send(`this is put method and entered id ${id} of comment router`);
}

module.exports={getVehicleRegistration,addVehicleRegistration,deleteVehicleRegistration,updateVehicleRegistration}