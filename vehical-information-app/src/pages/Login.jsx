import React from "react";
import "../styles/settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Login</h2>
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

export default Settings;
