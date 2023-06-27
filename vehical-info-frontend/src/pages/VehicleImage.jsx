import "../styles/registration.css";
import { React, useEffect, useRef } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';


const VehicleImage = () => {

  let image_name = useRef();
  let image_path = useRef();
  let image_type = useRef();
  let created = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let api = `http://localhost:5050/`;

    let formData = {
        image_name: image_name.current.value,
        image_path: image_path.current.value,
        image_type: image_type.current.value,
        created: created.current.value,

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
        <h2 className="registration__title">Vehicle Image</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="form__group">
            <div>
              <label>Image Name</label>
              <input name="text" ref={image_name} placeholder="please enter the image name">
              </input>
            </div>
         
            <div>
              <label> Image Path</label>
              <input name="text" ref={image_path } placeholder=" please enter the image path">
              </input>
            </div>
            </div>

            <div className="form__group">
            <div>
              <label>Image Type</label>
              <input name="text" ref={image_type} placeholder="please enter the image type">
              </input>
            </div>
         
            <div>
              <label>Created</label>
              <input name="date" ref={created } placeholder=" dd/mm/yyyy">
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

export default VehicleImage;
