let mysqlConnect = require("../helpers/mysql-connection");
let ownerValidator = require("../Validations/owner_validation");

let getOwner = (req, res) => {
  let sql = `SELECT * FROM owner`;
  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
    res.send(results)
  });
};

let addOwner = (req, res) => {

  const { error, value } = ownerValidator.validateSchema(req.body)

  if (error) {
    console.log(error)
    return res.status(404).send(error.details)
  }

  let { first_name, last_name, owner_dob, contact_email, contact_phone_no,
    business_phone_no, business_email, pin_code, state, company_name,
    organization_name, type_of_business_id, registration_date,
    company_description, office_address, office_city, office_state,
    office_country, GST_number, created, modified } = req.body;
  console.log(req.body);

  let sql = `INSERT INTO owner (first_name, last_name, owner_dob, contact_email, contact_phone_no, business_phone_no, business_email, pin_code , state, company_name, organization_name, type_of_business_id, registration_date, company_description, office_address, office_city, office_state, office_country, GST_number, created, modified)
   VALUES ('${first_name}', '${last_name}', '${owner_dob}', '${contact_email}', '${contact_phone_no}', '${business_phone_no}', '${business_email}', '${pin_code}', '${state}', '${company_name}', '${organization_name}', '${type_of_business_id}', '${registration_date}', '${company_description}', '${office_address}', '${office_city}', '${office_state}', '${office_country}','${GST_number}', '${created}', '${modified}')`;
  console.log("sql query", sql);

  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) throw error;

  });
  res.send(" data is successfully inserted  into the database");

};
let deleteOwner = (req, res) => {

  let id = req.params.id;
  console.log(id)

  let sql = `delete from owner where id=${id}`;
  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
  });
  res.send(`Owner data of entered id - ${id} of Owner router deleted`);
};

let updateOwner = (req, res) => {
  let id = req.params.id;
  let updateData = req.body;
  let sql = `update owner set ? where id=${id}`;
  console.log(sql)
  mysqlConnect.query(sql, updateData, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
  });
  res.send(`this is put method and entered id ${id} of Owner router`);
};

module.exports = { getOwner, addOwner, deleteOwner, updateOwner };
