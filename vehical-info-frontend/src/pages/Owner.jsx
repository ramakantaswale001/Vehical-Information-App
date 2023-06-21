import "../styles/registration.css";
import { React, useRef } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';


const Owner = () => {

  let first_name = useRef();
  let last_name = useRef();
  let owner_dob = useRef();
  let contact_email = useRef();
  let contact_phone_no = useRef();
  let business_phone_no = useRef();
  let business_email = useRef();
  let pin_code = useRef();
  let state = useRef();
  let company_name = useRef();
  let organization_name = useRef();
  let type_of_business_id = useRef();
  let registration_date = useRef();
  let company_description = useRef();
  let office_address = useRef();
  let office_city = useRef();
  let office_state = useRef();
  let office_country = useRef();
  let GST_number = useRef();
  let created = useRef();
  let modified = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let api = `http://localhost:5050/owner/addOwner`;

    let formData = {
      first_name: first_name.current.value,
      last_name: last_name.current.value,
      owner_dob: owner_dob.current.value,
      contact_email: contact_email.current.value,
      contact_phone_no: contact_phone_no.current.value,
      business_phone_no: business_phone_no.current.value,
      business_email: business_email.current.value,
      pin_code: pin_code.current.value,
      state: state.current.value,
      company_name: company_name.current.value,
      organization_name: organization_name.current.value,
      type_of_business_id: type_of_business_id.current.value,
      registration_date: registration_date.current.value,
      company_description: company_description.current.value,
      office_address: office_address.current.value,
      office_city: office_city.current.value,
      office_state: office_state.current.value,
      office_country: office_country.current.value,
      GST_number: GST_number.current.value,
      created: created.current.value,
      modified: modified.current.value
    }
    axios.post(api, formData, {
      headers: {
        'token': localStorage.getItem("token")
      }
    })
      .then(function (response) {
        // handle success
        console.log("response:-", response);

        if (response.data.length !== 0) {
          console.log("response.data", response.data)
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
              <input type="text" ref={first_name} placeholder="please enter your first_name" />
            </div>

            <div>
              <label>Last Name</label>
              <input type="text" ref={last_name} placeholder="please enter your last_name" />
            </div>
          </div>

          <div className="form__group">
            <div>
              <label>Owner DOB</label>
              <input type="email" ref={owner_dob} placeholder="please enter your owner_dob" />
            </div>

            <div>
              <label>Contact Email</label>
              <input type="contact_email" ref={contact_email} placeholder="please enter your contact_email" />
            </div>
          </div>

          <div className="form__group">
            <div>
              <label>Contact Phone No</label>
              <input type="number" ref={contact_phone_no} placeholder="please enter your phone no" />
            </div>

            <div>
              <label>Business Phone No</label>
              <input type="number" ref={business_phone_no} placeholder="Please enter your Business Phone No" />
            </div>
          </div>

          <div className="form__group">
            <div>
              <label>Business Email</label>
              <input type="email" ref={business_email} placeholder="Please enter your Business Email" />
            </div>

            <div>
              <label>Pin Code</label>
              <input type="number" ref={pin_code} placeholder="Please enter your Pin Code" />
            </div>
          </div>

          <div className="form__group">
            <div>
              <label>State</label>
              <input type="text" ref={state} placeholder="Please enter your state" />
            </div>

            <div>
              <label>Company Name</label>
              <input type="text" ref={company_name} placeholder="Please enter your company name" />
            </div>
          </div>

          <div className="form__group">
            <div>
              <label>Organization Name</label>
              <input type="text" ref={organization_name} placeholder="Please enter your organization name" />
            </div>

            <div>
              <label>Type Of Business</label>
              <input type="text" ref={type_of_business_id} placeholder="Please enter your type of business" />
            </div>
          </div>

          <div className="form__group">
            <div>
              <label>Registration Date</label>
              <input type="date" ref={registration_date} placeholder="Please enter your registration date" />
            </div>

            <div>
              <label>Company Description</label>
              <textarea rows="5" cols="30" ref={company_description} placeholder="please enter your company discription"></textarea>
            </div>
          </div>

          <div className="form__group">
            <div>
              <label>Office Address</label>
              <textarea rows="5" cols="30" ref={office_address} placeholder="please enter your office address"></textarea>
            </div>

            <div>
              <label>Office City</label>
              <input ref={office_city} placeholder="please enter your office city"></input>
            </div>
          </div>

          <div className="form__group">
            <div>
              <label>Office State</label>
              <input ref={office_state} placeholder="please enter your office state"></input>
            </div>

            <div>
              <label>Office Country</label>
              <input ref={office_country} placeholder="please enter your office country"></input>
            </div>
          </div>

          <div className="form__group">
            <div>
              <label>GST Number</label>
              <input ref={GST_number} placeholder="please enter your GST number"></input>
            </div>

            <div>
              <label>Office Country</label>
              <input ref={office_country} placeholder="please enter your office country"></input>
            </div>
          </div>

          <div className="profile__img-btns">
            <button type="reset" className="dlt__btn">Reset</button>
            <button type="submit" className="update__btn">Submit</button>
          </div>

        </form>
      </div >
    </div >
  );
}

export default Owner;