import React from "react";
import "../styles/settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">User Registration</h2>
          <form>
            <div className="form__group">
              <div>
                <label>First Name</label>
                <input type="text" placeholder="Suresh" />
              </div>

              <div>
                <label>Last Name</label>
                <input type="text" placeholder="Jain" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Email</label>
                <input type="email" placeholder="example@gmail.com" />
              </div>

              <div>
                <label>Phone Number</label>
                <input type="number" placeholder="+880 17*******" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Address</label>
                <input type="text" placeholder="Shalimar Chauk,Delhi" />
              </div>

              <div>
                <label>Gender</label>
                <input type="text" placeholder="Male" />
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

export default Settings;
