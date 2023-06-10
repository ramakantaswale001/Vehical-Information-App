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
              <label>Company Name</label>
              <input type="text" placeholder="Please enter your company name" />
            </div>

            <div>
              <label>Types Of Business(TOB)</label>
              <select>
                <option value="0" >-------------------------------------select TOB-----------------------------</option>
                <option value="car">Car</option>
                <option value="bus">Bus</option>
                <option value="Both">Both</option>
              </select>
            </div>
          </div>

          <div className="form__group">
            <div>
              <label>Established Year Of Company</label>
              <input type="date" placeholder="dd/mm/yyyy" />
            </div>

            <div>
              <label>Company Discription</label>
              <textarea rows="5" cols="30" placeholder="please enter your company discription"></textarea>

            </div>

          </div>


          <div className="form__group">
            <div>
              <label>Office Address</label>
              <textarea rows="5" cols="30" placeholder="please enter your office address"></textarea>
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
