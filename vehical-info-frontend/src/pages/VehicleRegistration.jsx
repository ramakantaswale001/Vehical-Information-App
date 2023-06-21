import "../styles/registration.css";
import { React, useRef } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';


const VehicleRegistration = () => {

  let vehicle_type_id = useRef();
  let seating_capacity = useRef();
  let vehicle_image_id = useRef();
  let type_of_vehicle = useRef();
  let rate_per_km = useRef();
  let rent_amount = useRef();
  let owner_id = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let api = `http://localhost:5050/vehicleRegistration/add`;

    let formData = {
      vehicle_type_id: vehicle_type_id.current.value,
      seating_capacity: seating_capacity.current.value,
      vehicle_image_id: vehicle_image_id.current.value,
      type_of_vehicle: type_of_vehicle.current.value,
      rate_per_km: rate_per_km.current.value,
      rent_amount: rent_amount.current.value,
      owner_id: owner_id.current.value
    }

    axios.post(api, formData, {
      headers: {
        'token': localStorage.getItem("token")
      }
    })
      .then(function (response) {
        // handle success
        console.log("response:-", response);

        if (response.data.length !== 0) {
          console.log("response.data", response.data)
          console.log('Data Summited Successfully !!');
          return Swal.fire(
            'Data Summited Successfully !!',
            'You clicked the button!',
            'success'
          );
        } else {
          console.log('Please fill the form first!!');
          return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill the form first !!',

          })
        }

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  return (
    <div className="registration">
      <div className="registration__wrapper">
        <h2 className="registration__title">Vehicle Registration</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="form__group">
            <div>
              <label>Vehicle Type Id</label>
              <input ref={vehicle_type_id} placeholder="please enter vehicle type">
              </input>
            </div>

            <div>
              <label>Seating Capacity</label>
              <input ref={seating_capacity} placeholder="please enter seating capacity">
              </input>
            </div>
          </div>


          <div className="form__group">
            <div>
              <label> Vehicle Image Id</label>
              <input ref={vehicle_image_id } placeholder="please enter vehicle image">
              </input>
            </div>

            <div>
            <label> Type Of Vehicle</label>
            <input ref={type_of_vehicle } placeholder="please enter type of vehicle">
            </input>
          </div>

          </div>

          <div className="form__group">
            <div>
              <label>Rate Per Km</label>
              <input ref={rate_per_km } placeholder="please enter rate per km">
            </input>
            </div>
        
            <div>
              <label>Rent Amount</label>
              <input type="number" ref={rent_amount} placeholder="please enter rent amount" />
            </div>
            </div>

            <div className="form__group">
            <div>
              <label>Owner Id</label>
              <input type="number" ref={owner_id } placeholder="please enter owner" />
            </div>
          </div>

          <div className="form__group">
            <div className="profile__img-btns">
              <button type="reset" className="dlt__btn">Reset</button>
              <button type="submit" className="update__btn">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleRegistration;
