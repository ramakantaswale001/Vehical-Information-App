import "../styles/registration.css";
import { React, useRef } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


const VehicleRegistration = () => {

  let select_vehicle = useRef();
  let seating_capacity = useRef();
  let AC_NonAC = useRef();
  let rate_per_km = useRef();

  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let api = `http://localhost:5050/vehicleRegistration/add`;

    let formData = {
      select_vehicle: select_vehicle.current.value,
      seating_capacity: seating_capacity.current.value,
      AC_NonAC: AC_NonAC.current.value,
      rate_per_km: rate_per_km.current.value,
    }

    axios.post(api, formData, {
      headers: {
        'token': localStorage.getItem("token")
      }
    })
      .then(function (response) {
        // handle success
        console.log("response:-", response);

        if (response.data.length != 0) {
          console.log("response.data",response.data)
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
        <h2 className="registration__title">Car/Bus Details</h2>
          <form onSubmit={onSubmitHandler}>
            <div className="form__group">
              <div>
                <label>Select Vehicle</label>
                <select ref={select_vehicle}>
                <option value="0" >-------------------------------------Vehicles-----------------------------</option>
                <option value="car">TATA Bus</option>
                <option value="bus">Shivshahi Bus</option>
                <option value="other">Other</option>
              </select>
              </div>
            </div>


            <div className="form__group">
              <div>
                <label> Seating Capacity</label>
                <select ref={seating_capacity} >
                <option value="0" >--------------------------------------- Seating Capacity---------------------------</option>
                <option value="5">4 Seater</option>
                <option value="7">7 Seater</option>
                <option value="6">6 seater</option>
                <option value="30">30 Seater</option>
                <option value="20">20 Seater</option>
                <option value="60">60 seater</option>
                <option value="other">Other</option>
              </select>
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>AC NonAC</label>
                <select ref={AC_NonAC}>
                  <option>---------------------select AC_NonAC---------------</option>
                  <option value="AC">AC</option>
                  <option value="Non AC">Non AC</option>
                  <option value="both">Both</option>
                </select>
              </div>
              </div>

              <div className="form__group">
              <div>
                <label>Rate Per KM</label>
                <input type="number/text" ref={rate_per_km} />
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
