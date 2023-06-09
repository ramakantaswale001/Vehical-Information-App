import React from "react";
import "../styles/settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Owner Registration</h2>
          <form>
            <div className="form__group">
              <div>
                <label>First Name</label>
                <input type="text" placeholder="Ramesh" />
              </div>

              <div>
                <label>Last Name</label>
                <input type="text" placeholder="Patel"/>
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
                <label>Date of Birth</label>
                <input type="date" placeholder="dd/mm/yyyy" />
              </div>

              <div>
                <label>Gender</label>
                <input type="text" placeholder="Male" />
              </div>
            </div>

            <div className="form__group"> 
            <h2 className="company name__title">Company Name</h2>
            </div>

            <div className="form__group">
           // <h2 className="types of business__title"></h2>
              <select>
                <option value="toyota">Car</option>
                <option value="bmw">Bus</option>
                <option value="audi">Both</option>
              </select>
              </div>   

            <div className="form__group">
              <div className="profile__img-btns">
                <button className="reset__btn">Reset</button>
                <button className="submit__btn">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Settings;
