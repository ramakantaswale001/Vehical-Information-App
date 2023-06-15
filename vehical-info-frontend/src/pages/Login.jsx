import "../styles/registration.css";
import { React, useRef } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


const Login = () => {
  let userEmail = useRef();
    let userPassword = useRef();
    const navigate = useNavigate();
   
    const onLogin = (event) => {
        event.preventDefault();
       

        let loginApi = `http://localhost:5050/user/login`;
    
        axios.post(loginApi, {
          email: userEmail.current.value,
          password: userPassword.current.value
        })
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
        <h2 className="registration__title">Login</h2>
          <form onSubmit={onLogin} >
            <div className="form__group">
              <div>
                <label>Username/Email</label>
                <input type="text" ref={userEmail} placeholder="please enter your username/email" />
              </div>

            </div>

            <div className="form__group">
            
              <div>
                <label>Password</label>
                <input type="password" ref={userPassword} placeholder="please enter your password"/>
              </div>
            </div>

            <div className="form__group">
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

export default Login;
