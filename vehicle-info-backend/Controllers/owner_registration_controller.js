let mysqlConnect = require("../helpers/mysql-connection");
let ownerRegistrationValidator = require("../Validations/owner_registration_validation");

let getOwnerRegistration = (req, res) => {
  let sql = `SELECT * FROM owner_registation`;
  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
    res.send(results)
  });
};

let addOwnerRegistration = (req, res) => {

  let OwnerRegistrationData = req.body;

  const { error, value } = ownerRegistrationValidator.validateSchema(req.body)

  if (error) {
    console.log(error)
    return res.status(404).send(error.details)
  }

  let { firstName, lastName, email, phone_no, company_name, types_of_business, company_description, company_address } = req.body;
  console.log(req.body);

  let sql = `insert into OwnerRegistration set (firstName, lastName,email, phone_no, company_name, types_of_business, company_description ,company_address)
  values("${firstName}", "${lastName}", "${email}", "${phone_no}", "${company_name}", "${types_of_business}","${company_description}", "${company_address}",now()`

  mysqlConnect.query(sql, OwnerRegistrationData, function (error, results, fields) {
    if (error) throw error;

  });
  res.send(" data is successfully inserted  into the database");

};
let deleteOwnerRegistration = (req, res) => {

  let id = req.params.id;
  console.log(id)

  let sql = `delete from OwnerRegistration where id=${id}`;
  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
  });
  res.send(`OwnerRegistration data of entered id - ${id} of OwnerRegistration router deleted`);
};

let updateOwnerRegistration = (req, res) => {
  let id = req.params.id;
  let updateData = req.body;
  let sql = `update OwnerRegistration set ? where id=${id}`;
  console.log(sql)
  mysqlConnect.query(sql, updateData, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
  });
  res.send(`this is put method and entered id ${id} of OwnerRegistration router`);
};

module.exports = { getOwnerRegistration, addOwnerRegistration, deleteOwnerRegistration, updateOwnerRegistration };
