import React from "react";
import { useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";

const Edit = ({ VehicleData, selectedVehicle, setVehicle, setIsEditingVehicle }) => {
  const id = selectedVehicle.id;
console.log("---updateid---",id)
  const [vehicle_type_id, setVehicle_type_id] = useState(selectedVehicle.vehicle_type_id);
  const [seating_capacity, setSeating_capacity] = useState(selectedVehicle.seating_capacity);
  const [vehicle_image_id , setVehicle_image_id] = useState(selectedVehicle.vehicle_image_id );
  const [type_of_vehicle, setType_of_vehicle] = useState(selectedVehicle.type_of_vehicle);
  const [rate_per_km, setRate_per_km] = useState(selectedVehicle.rate_per_km);
  const [rent_amount, setRent_amount] = useState(selectedVehicle.rent_amount);
  const [owner_id, setOwner_id] = useState(selectedVehicle.owner_id);

 
  const handleUpdateVehicle = (e) => {
    e.preventDefault();

    if (!vehicle_type_id || !seating_capacity || !vehicle_image_id || !type_of_vehicle || !rate_per_km || !rent_amount || !owner_id) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const Vehicle = {
      id,
      vehicle_type_id,
      seating_capacity,
      vehicle_image_id,
      type_of_vehicle,
      rate_per_km,
      rent_amount,
      owner_id
    };

    let updateVehicle = `http://localhost:5000/vehicleRegistration/update/${id}`;

    axios
      .put(updateVehicle, Vehicle,
      {
        headers: {
            token: localStorage.getItem('token')
        }}
      )
      .then(function (response) {
        console.log(response.data);
        for (let i = 0; i < VehicleData.length; i++) {
          if (VehicleData[i].id === id) {
            VehicleData.splice(i, 1, Vehicle);
            break;
          }
        }
        
        setVehicle(VehicleData);
      })
      .catch(function (error) {
        console.log(error);
      });

    
    //setIsEditingVehicle(false);
    

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${Vehicle.vehicle_type_id} ${Vehicle.seating_capacity}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
   
    <div className="small-container">
      <form onSubmit={handleUpdateVehicle}>
        <h3>Edit Vehicle</h3>
        <label htmlFor="vehicle_type_id">Vehicle Type Id</label>
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
          type="number"
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
          type="number"
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
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditingVehicle(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
