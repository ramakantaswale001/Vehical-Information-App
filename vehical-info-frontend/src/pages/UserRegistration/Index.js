import React from "react";
// import "../../styles/registration.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import Header from "./Header";
import Edit from "./Edit";
import List from "./List";
import Add from "./Add";

const Index = () => {
  const [UserData, setUser] = useState();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [isEditingUser, setIsEditingUser] = useState(false);
  
  useEffect(()=>{
    axios
      .get("http://localhost:5000/user/get")
      .then((response) =>{
        //console.log(response);
        const data = response.data
        console.log('---------23-----',data) 
        setUser(data) 
      })
      .catch(function (error) {
        console.log(error);
      });
  },[]);

  const handleEditUser = (id) => {
    console.log("----editUser-id--", id);
    const [singleUser] = UserData.filter((singleUser) => singleUser.id === id);
    console.log("----singleUser---", singleUser);
    setSelectedUser(singleUser);
    setIsEditingUser(true);
   

  };

  const handleDeleteUser = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to delete",
      text: "You wont able to revert this ",
      showCancelButton: true,
      confirmButtonText: "yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.value){
      
        let deleteUserApi =  `http://localhost:5000/user/delete/${id}`;
        axios.delete(deleteUserApi, {
                headers: {
                    token: localStorage.getItem('token')
                }
        })
        .then(function (response) {
             console.log("-----user updated----",response.data);

             Swal.fire({
              icon:"success",
              title:'deleted',
              text:`User has been deleted`,
              showConfirmButton:false,
              timer:1200,
            });

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });

      }
    });
  };

  return (
    <div className="container-right" style={{marginTop:"10%"}}>
      {/* For List Showing on screen */}
      {/* --Logic-- When adding and editing is not showing show Header and List */}
      {!isAddingUser && !isEditingUser && (
        <>
          <Header setIsAddingUser={setIsAddingUser} />
          <List
            UserData={UserData}
            handleEditUser={handleEditUser}
            handleDeleteUser={handleDeleteUser}
          />
        </>
      )}
      {/* For Adding  */}
      {isAddingUser && (
        <Add
          UserData={UserData}
          setUser={setUser}
          setIsAddingUser={setIsAddingUser}
        />
      )}

      {/* For Editing page initially false */}
      {isEditingUser && (
        <Edit
          UserData={UserData}
          selectedUser={selectedUser}
          setUser={setUser}
          setIsEditingUser={setIsEditingUser}
        />
      )}
    </div>
  );
};

export default Index;
