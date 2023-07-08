import React from 'react'
import { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import axios from 'axios';


const Add = ({VehicleData,setVehicle,setIsAddingVehicle}) => {

  const [vehicle_type_id, setVehicle_type_id] = useState("");
  const [seating_capacity, setSeating_capacity] = useState("");
  const [vehicle_image_id , setVehicle_image_id] = useState("");
  const [type_of_vehicle, setType_of_vehicle] = useState("");
  const [rate_per_km, setRate_per_km] = useState("");
  const [rent_amount, setRent_amount] = useState("");
  const [owner_id, setOwner_id] = useState("");

   

    // useEffect(() => {
    //     firstName.current.focus();
    // }, []);


 
    const handleAddVehicle = (e) => {
        e.preventDefault();
        if (!vehicle_type_id || !seating_capacity || !vehicle_image_id || !type_of_vehicle || !rate_per_km || !rent_amount || !owner_id) {
            return Swal.fire({
            icon: "error",
            title: "ERROR!",
            text: "all fields are required",
            showConfirmButton: true,
            });
        }
    
        const  id = VehicleData.length + 1;
    
        const newVehicle = {
           
          vehicle_type_id,
          seating_capacity,
          vehicle_image_id,
          type_of_vehicle,
          rate_per_km,
          rent_amount,
          owner_id
       }

        let addVehicle = "http://localhost:5000/vehicleRegistration/add";
        
        axios
            .post(addVehicle, newVehicle,
              {
                headers: {
                    token: localStorage.getItem('token')
                }}
              )
            .then(function (response) {
                 console.log(response.data);
            })
            .catch(function (error) {
            console.log(error);
            });

        VehicleData.push(newVehicle);
        setVehicle(VehicleData);
        setIsAddingVehicle(false);
    
    
        Swal.fire({
            icon:"success",
            title:"Added",
            text: `${vehicle_type_id} ${seating_capacity}'s data has been Added`,
            showConfirmButton:false,
            timer:1200
        });
    };
    
  return (
    <div className="small-container">
    <form onSubmit={handleAddVehicle}>
      <h3>Add Vehicle</h3>
      <label   htmlFor="vehicle_type_id">Vehicle Type Id</label>
        <input
          id="vehicle_type_id"
          type="number"
          name="vehicle_type_id"
          value={vehicle_type_id}
          onChange={(e) => setVehicle_type_id(e.target.value)}
        />

        <label htmlFor="seating_capacity">Seating Capacity</label>
        <input
          id="seating_capacity"
          type="text"
          name="seating_capacity"
          value={seating_capacity}
          onChange={(e) => setSeating_capacity(e.target.value)}
        />

        <label htmlFor="vehicle_image_id">Vehicle Image Id</label>
        <input
          id="vehicle_image_id"
          type="number"
          name="vehicle_image_id"
          value={vehicle_image_id}
          onChange={(e) => setVehicle_image_id(e.target.value)}
        />

        <label htmlFor="type_of_vehicle">Type Of Vehicle</label>
        <input
          id="type_of_vehicle"
          type="text"
          name="type_of_vehicle"
          value={type_of_vehicle}
          onChange={(e) => setType_of_vehicle(e.target.value)}
        />

        <label htmlFor="rate_per_km">Rate Per Km</label>
        <input
          id="rate_per_km"
          type="number"
          name="rate_per_km"
          value={rate_per_km}
          onChange={(e) => setRate_per_km(e.target.value)}
        />
    
         <label htmlFor="rent_amount">Rent Amount</label>
        <input
          id="rent_amount"
          type="text"
          name="rent_amount"
          value={rent_amount}
          onChange={(e) => setRent_amount(e.target.value)}
        />
        <label htmlFor="owner_id">Owner Id</label>
        <input
          id="owner_id"
          type="number"
          name="owner_id"
          value={owner_id}
          onChange={(e) => setOwner_id(e.target.value)}
        />

    
    <div style={{ marginTop: "30px" }}>
        <input type="submit" value="Add" />
        <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAddingVehicle(false)}
        />
    </div>
    </form>
</div>
)
}

export default Add;