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
  const [OwnerData, setOwner] = useState();
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [isAddingOwner, setIsAddingOwner] = useState(false);
  const [isEditingOwner, setIsEditingOwner] = useState(false);
  
  useEffect(()=>{
    let getOwner = "http://localhost:5000/owner/get";
    axios
      .get(getOwner,
        {
          headers: {
              token: localStorage.getItem('token')
          }
  })
      .then((response) =>{
        //console.log(response);
        const data = response.data
        console.log('---------23-----',data) 
        setOwner(data) 
      })
      .catch(function (error) {
        console.log(error);
      });
  },[]);

  const handleEditOwner = (id) => {
    console.log("----editOwner-id--", id);
    const [singleOwner] = OwnerData.filter((singleOwner) => singleOwner.id === id);
    console.log("----singleUser---", singleOwner);
    setSelectedOwner(singleOwner);
    setIsEditingOwner(true);
   

  };

  const handleDeleteOwner = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to delete",
      text: "You wont able to revert this ",
      showCancelButton: true,
      confirmButtonText: "yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.value){
      
        let deleteOwnerApi =  `http://localhost:5000/owner/delete/${id}`;
        axios.delete(deleteOwnerApi, {
                headers: {
                    token: localStorage.getItem('token')
                }
        })
        .then(function (response) {
             console.log("-----user updated----",response.data);

             Swal.fire({
              icon:"success",
              title:'deleted',
              text:`Owner has been deleted`,
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
      {!isAddingOwner && !isEditingOwner && (
        <>
          <Header setIsAddingOwner={setIsAddingOwner} />
          <List
            OwnerData={OwnerData}
            handleEditOwner={handleEditOwner}
            handleDeleteOwner={handleDeleteOwner}
          />
        </>
      )}
      {/* For Adding  */}
      {isAddingOwner && (
        <Add
          OwnerData={OwnerData}
          setOwner={setOwner}
          setIsAddingOwner={setIsAddingOwner}
        />
      )}

      {/* For Editing page initially false */}
      {isEditingOwner && (
        <Edit
          OwnerData={OwnerData}
          selectedOwner={selectedOwner}
          setOwner={setOwner}
          setIsEditingOwner={setIsEditingOwner}
        />
      )}
    </div>
  );
};

export default Index;
