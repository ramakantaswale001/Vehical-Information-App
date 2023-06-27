import "../styles/registration.css";
import { React, useRef } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';


const VehicleType = () => {

  let type = useRef();
  let created = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let api = `http://localhost:5050/`;

    let formData = {
      type: type.current.value,
      created: created.current.value
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
        <h2 className="registration__title">Type Of Business</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="form__group">
            <div>
              <label>Type</label>
              <input name="text" ref={type} placeholder="please enter the type">
              </input>
            </div>
          </div>

          <div className="form__group">
            <div>
              <label>Created</label>
              <input name="date" ref={created } placeholder="dd/mm/yyyy">
              </input>
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

export default VehicleType;
