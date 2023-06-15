const mysqlConnect = require("../helpers/mysql-connection");
const  userValidation= require("../Validations/user_validation");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

let getUser = (req, res) =>{

 let sql =`SELECT * from user`;
  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results[0]);
    res.send(results)
  });
};

let getUserById = (req,res) =>{
  
  let userId= req.params.id;
  let query = `SELECT * FROM user WHERE  id= ${userId}`;
  mysqlConnect.query(query, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0]);
      res.send(results);
    }); 
}

let userLogin = (req,res) =>{
    
  let { email, password } = req.body;
  console.log(req.body)
  let newPass = md5(password);
  console.log(newPass)

  let sql = `SELECT * FROM user WHERE email = '${email}' AND password = '${newPass}'`;
  console.log(sql)
  mysqlConnect.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0]);
      
      if(results.length == 0) {
          res.send("Username and password is not valid");
      } else {
        
          const token = jwt.sign(
              { uid: results[0].id, email:results[0].email, fname: results[0].firstname  },
                  process.env.TOKEN_KEY,
              {
                  expiresIn: "2h",
              }
          );
          console.log('this is new token', token);
          results[0].token = token;
          res.send(results);
      }
  }); 
}

let addUser = (req,res) =>{
    let userData = req.body;
    console.log(userData);
    let { firstName, lastName, email, phone_no, password,pin_code,address} = userData;

    let newPassword = md5(password);
    let status = '1';

    let sql = `INSERT INTO user (firstName, lastName, email, password, phone_no, address, pin_code) VALUES('${firstName}', '${lastName}', '${email}', '${newPassword}' , '${phone_no}','${address}','${pin_code}' )`;
    console.log(sql);
    
    mysqlConnect.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.status(201).send(results);
    });
}

let userLogOut = (req,res)=>{
 
}

let deleteUser = (req, res) => {

 let id =req.params.id;
    console.log(id)

    let sql = `DELETE from user where id=${id}`;
    mysqlConnect.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);

        res.send(`user deleted of - ${id}`);
      });
   
};

let updateUser = (req, res) => {
  let id=req.params.id;
  let updateData=req.body;
  let sql = `update user set ? where id=${id}`;
  console.log(sql)
  mysqlConnect.query(sql,updateData, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);

      res.send(`User updated ${results}`);
    });
  
};

module.exports = { getUser,getUserById,userLogin, addUser, deleteUser, updateUser ,userLogOut  };
