import React from "react";
import { useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";

const Edit = ({ UserData, selectedUser, setUser, setIsEditingUser }) => {
  const id = selectedUser.id;
console.log("---updateid---",id)
  const [firstName, setFirstName] = useState(selectedUser.firstName);
  const [lastName, setLastName] = useState(selectedUser.lastName);
  const [email, setEmail] = useState(selectedUser.email);
  const [phone_no, setPhone_no] = useState(selectedUser.phone_no);
  const [address, setAddress] = useState(selectedUser.address);
  const [pin_code, setPin_code] = useState(selectedUser.pin_code);
  const [photo, setPhoto] = useState(selectedUser.photo);
  const [password, setPassword] = useState(selectedUser.password);

 
  const handleUpdateUser = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone_no || !address || !pin_code || !photo || !password) {
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
      email,
      password,
      phone_no,
      address,
      pin_code,
      photo
    };

    let updateUser = `http://localhost:5000/user/update/${id}`;

    axios
      .put(updateUser, User,
      {
        headers: {
            token: localStorage.getItem('token')
        }}
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

        <label htmlFor="email">email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">password</label>
        <input
          id="password"
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="phone_no">phone_no</label>
        <input
          id="phone_no"
          type="number"
          name="phone_no"
          value={phone_no}
          onChange={(e) => setPhone_no(e.target.value)}
        />
    
         <label htmlFor="address">address</label>
        <input
          id="address"
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="pin_code">pin_code</label>
        <input
          id="pin_code"
          type="number"
          name="pin_code"
          value={pin_code}
          onChange={(e) => setPin_code(e.target.value)}
        />
        <label htmlFor="photo">photo</label>
        <input
          id="photo"
          type="file"
          name="photo"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
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
