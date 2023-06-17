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

    let {select_vehicle,seating_capacity,AC_NonAC,rate_per_km}=req.body;
    console.log(req.body);

    let sql =`insert into vehicle_registration (select_vehicle,seating_capacity,AC_NonAC,rate_per_km)
     values ("${select_vehicle}","${seating_capacity}","${AC_NonAC}","${rate_per_km}")`;
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
    res.send(`this is put method and entered id ${id} of VehicleRegistration router`);
}

module.exports={getVehicleRegistration,addVehicleRegistration,deleteVehicleRegistration,updateVehicleRegistration}