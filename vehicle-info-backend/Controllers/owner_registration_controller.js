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

  const { error, value } = ownerRegistrationValidator.validateSchema(req.body)

  if (error) {
    console.log(error)
    return res.status(404).send(error.details)
  }

  let { first_name, last_name, email, phone_no, company_name, type_of_business, estb_yr, company_description, office_address } = req.body;
  console.log(req.body);

  let sql = `INSERT INTO owner_registation (first_name, last_name,email, phone_no, company_name, type_of_business, estb_yr, company_description , office_address) VALUES ('${first_name}', '${last_name}', '${email}', '${phone_no}', '${company_name}', '${type_of_business}','${estb_yr}', '${company_description}', '${office_address}')`;
console.log("sql query",sql);
  mysqlConnect.query(sql,  function (error, results, fields) {
    if (error) throw error;

  });
  res.send(" data is successfully inserted  into the database");

};
let deleteOwnerRegistration = (req, res) => {

  let id = req.params.id;
  console.log(id)

  let sql = `delete from owner_registation where id=${id}`;
  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
  });
  res.send(`OwnerRegistration data of entered id - ${id} of OwnerRegistration router deleted`);
};

let updateOwnerRegistration = (req, res) => {
  let id = req.params.id;
  let updateData = req.body;
  let sql = `update owner_registation set ? where id=${id}`;
  console.log(sql)
  mysqlConnect.query(sql, updateData, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
  });
  res.send(`this is put method and entered id ${id} of OwnerRegistration router`);
};

module.exports = { getOwnerRegistration, addOwnerRegistration, deleteOwnerRegistration, updateOwnerRegistration };
