import React from "react";
import "../styles/settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Car/Bus Details</h2>
          <form>
            <div className="form__group">
              <div>
                <label>Select Vehicle</label>
                <select>
                <option value="0" >-------------------------------------Vehicles-----------------------------</option>
                <option value="car">TATA Bus</option>
                <option value="bus">Shivshai Bus</option>
                <option value="other">Other</option>
              </select>
              </div>
            </div>

            <div className="form__group">
              <div>
                <label> Seating Capacity</label>
                <select>
                <option value="0" >--------------------------------------- Seating Capacity---------------------------</option>
                <option value="5">4 Seater</option>
                <option value="7">7 Seater</option>
                <option value="6">6 seater</option>
                <option value="30">30 Seater</option>
                <option value="20">20 Seater</option>
                <option value="60">60 seater</option>
                <option value="other">Other</option>
              </select>
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>AC/Non AC</label>
                <select>
                  <option>-------select-------</option>
                  <option value="AC">AC</option>
                  <option value="Non AC">Non AC</option>
                  <option value="both">Both</option>
                </select>
              </div>
              </div>

              <div className="form__group">
              <div>
                <label>Rate Per KM</label>
                <input type="number/text" />
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
