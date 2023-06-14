import React from "react";
import "../styles/registration.css";

const UserRegistration = () => {
  return (
    <div className="registration">
      <div className="registration__wrapper">
        <h2 className="registration
        s__title">User Registration</h2>
          <form>
            <div className="form__group">
              <div>
                <label>First Name</label>
                <input type="text" placeholder="please enter your first name" />
              </div>

              <div>
                <label>Last Name</label>
                <input type="text" placeholder="please enter your last name" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Email</label>
                <input type="email" placeholder="please enter your email" />
              </div>

              <div>
                <label>Phone Number</label>
                <input type="number" placeholder="please enter your phone no" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Address</label>
                <input type="text" placeholder="please enter your address" />
              </div>
        
              <div>
                <label>Pin Code</label>
                <input type="text" placeholder="please enter your pin code" />
              </div>
              </div>
            

            <div className="form__group">
              <div>
                <label>Your Photo</label>
                <p className="profile-img__desc">
                  This will be displayed in your profile
                </p>
                <input type="file" placeholder="choose file" />
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
