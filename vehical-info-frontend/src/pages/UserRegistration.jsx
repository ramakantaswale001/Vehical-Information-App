import "../styles/registration.css";
import { React, useRef, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const UserRegistration = () => {

    let firstName = useRef();
    let lastName = useRef();
    let email = useRef();
    let password = useRef();
    let address = useRef();
    let phoneNo = useRef();
    let photo = useRef();
    let pinCode = useRef();
   
    const [image,setImage] = useState("");
    console.log(image,"--------------19----------------");

    const navigate = useNavigate();
   
    const onSubmitHandler = (event) => {
        event.preventDefault();
       

        let api = `http://localhost:5050/user/adduser`;
    
        let formData={
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          email: email.current.value,
          password: password.current.value,
          address: address.current.value,
          phone_no: phoneNo.current.value,
          photo: photo.current.value,
          pin_code: pinCode.current.value,
          
        }
        axios.post(api, formData,{
          headers: {
            'token': localStorage.getItem("token")
          }})
        .then(function (response) {
          // handle success
          console.log("response:-",response);
           
          if(response.data.length == 0 ) {
            console.log('username and password not match');
            return Swal.fire({
              icon: "error",
              title: "ERROR!",
              text: "username and password not match",
              showConfirmButton: true,
            });
          } else {
            localStorage.setItem("token",response.data[0].token)
           
            console.log('valid user');
            console.log(response.data.length)
            navigate('/dashboard');
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
        <h2 className="registration__title">User Registration</h2>
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

              <div>
                <label>Passwordr</label>
                <input type="password" ref={password} placeholder="please enter your password" />
              </div>
            </div>

            <div className="form__group">

            <div>
            <label>Phone Number</label>
            <input type="number" ref={phoneNo} placeholder="please enter your phone no" />
          </div>

            <div>
                <label>Address</label>
                <input type="text" ref={address} placeholder="please enter your address" />
              </div>
        
              </div>
        
            <div className="form__group">
            <div>
            <label>Pin Code</label>
            <input type="number" ref={pinCode} placeholder="please enter your pin code" />
          </div>
              <div>
                <label>Your Photo</label>
                <p className="profile-img__desc">
                  This will be displayed in your profile
                </p>
                <input type="file" onChange={(e)=> setImage(e.target.files[0])} ref={photo} placeholder="choose file" />
              </div>

              <div className="profile__img-btns">
                <button className="dlt__btn">Reset</button>
                <button className="update__btn">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
};

export default UserRegistration;
