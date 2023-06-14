import React from "react";
import "../styles/registration.css";

const Login = () => {
  return (
    <div className="registration">
      <div className="registration__wrapper">
        <h2 className="registration__title">Login</h2>
          <form>
            <div className="form__group">
              <div>
                <label>Username/Email</label>
                <input type="text"  placeholder="please enter your username/email" />
              </div>

            </div>

            <div className="form__group">
            
              <div>
                <label>Password</label>
                <input type="password" placeholder="please enter your password"/>
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
