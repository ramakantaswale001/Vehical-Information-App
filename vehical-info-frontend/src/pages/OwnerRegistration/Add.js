import React from "react";
import { useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";

const Add = ({ OwnerData, setOwner,setIsAddingOwner }) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [DOB, setDOB] = useState("")
  const [email, setEmail] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [business_phone_no, setBusiness_phone_no] = useState("");
  const [business_email, setBusiness_email] = useState("");
  const [pin_code, setPin_code] = useState("");
  const [state, setState] = useState("");
  const [company_name, setCompany_name] = useState("");
  const [type_of_business, setType_of_business] = useState("");
  const [registration_date, setRegistration_date] = useState("");
  const [company_description, setCompany_description] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [GST_number, setGST_number] = useState("");
  const [created, setCreated] = useState("");
  const [modified, setModified] = useState("");

  const handleAddOwner = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !DOB || !email || !phone_no || !business_phone_no || !business_email || !pin_code || !state || !company_name || !type_of_business || !registration_date || !company_description || !city || !country || !GST_number || !created || !modified) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = OwnerData.length + 1;

    const Owner = {

      firstName,
      lastName,
      DOB,
      email,
      phone_no,
      business_phone_no,
      business_email,
      pin_code,
      state,
      company_name,
      type_of_business,
      registration_date,
      company_description,
      city,
      country,
      GST_number,
      created,
      modified
    };

    let addOwner = `http://localhost:5000/owner/update/${id}`;

    axios
      .post(addOwner,Owner,
        {
          headers: {
            token: localStorage.getItem('token')
          }
        }
      )
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });


    Swal.fire({
      icon: "success",
      title: "Added",
      text: `${firstName} ${lastName}'s data has been Added`,
      showConfirmButton: false,
      timer: 1200
    });
  };

  return (

    <div className="small-container">
      <form onSubmit={handleAddOwner}>
        <h3>Add Owner</h3>
        <label htmlFor="firstName">firstName</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">lastName</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="dob">DOB</label>
        <input
          id="dob"
          type="text"
          name="dob"
          value={DOB}
          onChange={(e) => setDOB(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="number">Phone No</label>
        <input
          id="phone_no"
          type="text"
          name="phone_no"
          value={phone_no}
          onChange={(e) => setPhone_no(e.target.value)}
        />

        <label htmlFor="business_phone_no">Business Phone No</label>
        <input
          id="business_phone_no"
          type="number"
          name="business_phone_no"
          value={business_phone_no}
          onChange={(e) => setBusiness_phone_no(e.target.value)}
        />

        <label htmlFor="business_email">Business Email</label>
        <input
          id="business_email"
          type="text"
          name="business_email"
          value={business_email}
          onChange={(e) => setBusiness_email(e.target.value)}
        />

        <label htmlFor="pin_code">Pin Code</label>
        <input
          id="pin_code"
          type="number"
          name="pin_code"
          value={pin_code}
          onChange={(e) => setPin_code(e.target.value)}
        />

        <label htmlFor="state">State</label>
        <input
          id="state"
          type="text"
          name="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        <label htmlFor="company_name">Company Name</label>
        <input
          id="company_name"
          type="text"
          name="company_name"
          value={company_name}
          onChange={(e) => setCompany_name(e.target.value)}
        />

        <label htmlFor="type_of_business">Type Of Business</label>
        <input
          id="type_of_business"
          type="text"
          name="type_of_business"
          value={type_of_business}
          onChange={(e) => setType_of_business(e.target.value)}
        />

        <label htmlFor="registration_date">Gegistration Date</label>
        <input
          id="registration_date"
          type="number"
          name="registration_date"
          value={registration_date}
          onChange={(e) => setRegistration_date(e.target.value)}
        />

        <label htmlFor="company_description">Company Description</label>
        <input
          id="company_description"
          type="text"
          name="company_description"
          value={company_description}
          onChange={(e) => setCompany_description(e.target.value)}
        />

        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label htmlFor="country">Country</label>
        <input
          id="country"
          type="text"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <label htmlFor="GST_number">GST Number</label>
        <input
          id="GST_number"
          type="number"
          name="GST_number"
          value={GST_number}
          onChange={(e) => setGST_number(e.target.value)}
        />

        <label htmlFor="created">Created</label>
        <input
          id="created"
          type="date"
          name="created"
          value={created}
          onChange={(e) => setCreated(e.target.value)}
        />

        <label htmlFor="modified">Modified</label>
        <input
          id="modified"
          type="date"
          name="modified"
          value={modified}
          onChange={(e) => setModified(e.target.value)}
        />


        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAddingOwner(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
