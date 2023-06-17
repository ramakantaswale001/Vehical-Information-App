import "../styles/registration.css";
import { React, useRef } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


const OwnerRegistration = () => {

  let firstName = useRef();
  let lastName = useRef();
  let email = useRef();
  let phoneNo = useRef();
  let companyName=useRef();
  let type_of_business=useRef();
  let estb_yr=useRef();
  let company_description=useRef();
  let office_address = useRef();
  
  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let api = `http://localhost:5050/ownerRegistration/addOwner`;

    let formData = {
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      email: email.current.value,
      phone_no: phoneNo.current.value,
      company_name:companyName.current.value,
      type_of_business:type_of_business.current.value,
      estb_yr:estb_yr.current.value,
      company_description:company_description.current.value,
      office_address: office_address.current.value
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
          <h2 className="registration__title">Owner Registration</h2>
          <form onSubmit={onSubmitHandler}>
            <div className="form__group">
              <div>
                <label>First Name</label>
                <input type="text" ref={firstName} placeholder="please enter your first name" />
              </div>

              <div>
                <label>Last Name</label>
                <input type="text" ref={lastName} placeholder="please enter your last name" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Email</label>
                <input type="email" ref={email} placeholder="please enter your email" />
              </div>
              </div>

              <div className="form__group">
              <div>
                <label>Phone Number</label>
                <input type="number" ref={phoneNo} placeholder="please enter your phone no" />
              </div>
           
              <div>
                <label>Company Name</label>
                <input type="text" ref={companyName} placeholder="Please enter your company name" />
              </div>
              </div>

              <div className="form__group">
              <div>
                <label>Types Of Business(TOB)</label>
                <select>
                  <option value="0" ref={type_of_business} >------------------------------select TOB-----------------------</option>
                  <option value="car" ref={type_of_business}>Car</option>
                  <option value="bus" ref={type_of_business}>Bus</option>
                  <option value="Both" ref={type_of_business}>Both</option>
                </select>
              </div>
          
              <div>
                <label>Established Year Of Company</label>
                <input type="date" ref={estb_yr}  placeholder="dd/mm/yyyy" />
              </div>
              </div>

              <div className="form__group">
              <div>
                <label>Company Description</label>
                <textarea rows="5" cols="30" ref={company_description} placeholder="please enter your company discription"></textarea>
              </div>

              <div>
                <label>Office Address</label>
                <textarea rows="5" cols="30" ref={office_address} placeholder="please enter your office address"></textarea>
              </div>
            </div>


            
              <div className="profile__img-btns">
                <button type="reset" className="dlt__btn">Reset</button>
                <button type="submit" className="update__btn">Submit</button>
              </div>
           
          </form>
        </div>
      </div>
    );
}

export default OwnerRegistration;