import React from "react";
import { useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";

const Edit = ({ UserData, selectedUser, setUser, setIsEditingUser }) => {
  const id = selectedUser.id;
  console.log("---updateid---", id)
  const [firstName, setFirstName] = useState(selectedUser.firstName);
  const [lastName, setLastName] = useState(selectedUser.lastName);
  const [DOB, setDOB] = useState(selectedUser.DOB)
  const [email, setEmail] = useState(selectedUser.email);
  const [phone_no, setPhone_no] = useState(selectedUser.phone_no);
  const [business_phone_no, setBusiness_phone_no] = useState(selectedUser.setBusiness_phone_no);
  const [business_email, setBusiness_email] = useState(selectedUser.business_email);
  const [pin_code, setPin_code] = useState(selectedUser.pin_code);
  const [state, setState] = useState(selectedUser.state);
  const [company_name, setCompany_name] = useState(selectedUser.company_name);
  const [type_of_business, setType_of_business] = useState(selectedUser.type_of_business);
  const [registration_date, setRegistration_date] = useState(selectedUser.registration_date);
  const [company_description, setCompany_description] = useState(selectedUser.company_description);
  const [address, setAddress] = useState(selectedUser.address);
  const [city, setCity] = useState(selectedUser.city);
  const [country, setCountry] = useState(selectedUser.country);
  const [GST_number, setGST_number] = useState(selectedUser.GST_number);
  const [created, setCreated] = useState(selectedUser.created);
  const [modified, setModified] = useState(selectedUser.modified);

  const handleUpdateUser = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !DOB || !email || !phone_no || !business_phone_no || !business_email || !pin_code || !state || !company_name || !type_of_business || !registration_date || !company_description || !city || !country || !GST_number || !created || !modified) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const User = {
      id,
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

    let updateUser = `http://localhost:5000/owner/update/${id}`;

    axios
      .put(updateUser, User,
        {
          headers: {
            token: localStorage.getItem('token')
          }
        }
      )
      .then(function (response) {
        console.log(response.data);
        for (let i = 0; i < UserData.length; i++) {
          if (UserData[i].id === id) {
            UserData.splice(i, 1, User);
            break;
          }
        }

        setUser(UserData);
      })
      .catch(function (error) {
        console.log(error);
      });


    //setIsEditingUser(false);


    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${User.firstName} ${User.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (

    <div className="small-container">
      <form onSubmit={handleUpdateUser}>
        <h3>Edit User</h3>
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
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditingUser(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
