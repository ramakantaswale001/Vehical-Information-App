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
  const [VehicleData, setVehicle] = useState();
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isAddingVehicle, setIsAddingVehicle] = useState(false);
  const [isEditingVehicle, setIsEditingVehicle] = useState(false);
  
  useEffect(()=>{
    let getVehicle = "http://localhost:5000/Vehicle/get";
    axios
      .get(getVehicle,
        {
          headers: {
              token: localStorage.getItem('token')
          }
  })
      .then((response) =>{
        //console.log(response);
        const data = response.data
        console.log('---------23-----',data) 
        setVehicle(data) 
      })
      .catch(function (error) {
        console.log(error);
      });
  },[]);

  const handleEditVehicle = (id) => {
    console.log("----editVehicle-id--", id);
    const [singleVehicle] = VehicleData.filter((singleVehicle) => singleVehicle.id === id);
    console.log("----singleUser---", singleVehicle);
    setSelectedVehicle(singleVehicle);
    setIsEditingVehicle(true);
   

  };

  const handleDeleteVehicle = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to delete",
      text: "You wont able to revert this ",
      showCancelButton: true,
      confirmButtonText: "yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.value){
      
        let deleteVehicleApi =  `http://localhost:5000/vehicle/delete/${id}`;
        axios.delete(deleteVehicleApi, {
                headers: {
                    token: localStorage.getItem('token')
                }
        })
        .then(function (response) {
             console.log("-----vehicle updated----",response.data);

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
      {!isAddingVehicle && !isEditingVehicle && (
        <>
          <Header setIsAddingVehicle={setIsAddingVehicle} />
          <List
            VehicleData={VehicleData}
            handleEditVehicle={handleEditVehicle}
            handleDeleteVehicle={handleDeleteVehicle}
          />
        </>
      )}
      {/* For Adding  */}
      {isAddingVehicle && (
        <Add
          VehicleData={VehicleData}
          setVehicle={setVehicle}
          setIsAddingVehicle={setIsAddingVehicle}
        />
      )}

      {/* For Editing page initially false */}
      {isEditingVehicle && (
        <Edit
          VehicleData={VehicleData}
          selectedVehicle={selectedVehicle}
          setVehicle={setVehicle}
          setIsEditingVehicle={setIsEditingVehicle}
        />
      )}
    </div>
  );
};

export default Index;
