let mysqlConnect = require("../helpers/mysql-connection");
let TypeOfBusinessValidator = require("../Validations/type_of_business")

let getTypeOfBusiness = (req, res) => {

  let sql = `SELECT * FROM type_of_business`;
  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
    res.send(results)
  });
}

let addTypeOfBusiness = (req, res) => {

  let { name,created } = req.body;
  console.log(req.body);

  let sql = `insert into type_of_business (name, created)
     values ("${name}", "${created}")`;
  console.log(sql)

  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) {
      console.log(sql)
      throw error;
    }

  });
  res.send(" data is successfully inserted  into the database");

}
let deleteTypeOfBusiness = (req, res) => {

  let id = req.params.id;
  console.log(id)

  let sql = `delete from type_of_business where id=${id}`;
  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
  });
  res.send(`user data of entered id - ${id} of TypeOfBusiness router deleted`);
}

let updateTypeOfBusiness = (req, res) => {
  let id = req.params.id;
  let updateData = req.body;
  let sql = `update vehicle_image set ? where id=${id}`;
  console.log(sql)
  mysqlConnect.query(sql, updateData, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
  });
  res.send(`this is put method and entered id ${id} of TypeOfBusiness router`);
}

module.exports = { getTypeOfBusiness, addTypeOfBusiness, deleteTypeOfBusiness, updateTypeOfBusiness }