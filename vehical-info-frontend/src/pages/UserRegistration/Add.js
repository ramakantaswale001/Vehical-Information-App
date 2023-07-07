import React from 'react'
import { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import axios from 'axios';


const Add = ({UserData,setUser,setIsAddingUser}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_no, setPhone_no] = useState("");
    const [address, setAddress] = useState("");
    const [pin_code, setPin_code] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");

    // useEffect(() => {
    //     firstName.current.focus();
    // }, []);

    const handleAddUser = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !phone_no || !address || !pin_code || !photo || !password) {
            return Swal.fire({
            icon: "error",
            title: "ERROR!",
            text: "all fields are required",
            showConfirmButton: true,
            });
        }
    
        const  id = UserData.length + 1;
    
        const newUser = {
           
            firstName,
            lastName,
            email,
            password,
            phone_no,
            address,
            pin_code,
            photo
       }

        let addUser = "http://localhost:5000/user/adduser";
        
        axios
            .post(addUser, newUser,
              {
                headers: {
                    token: localStorage.getItem('token')
                }}
              )
            .then(function (response) {
                 console.log(response.data);
            })
            .catch(function (error) {
            console.log(error);
            });

        UserData.push(newUser);
        setUser(UserData);
        setIsAddingUser(false);
    
    
        Swal.fire({
            icon:"success",
            title:"Added",
            text: `${firstName} ${lastName}'s data has been Added`,
            showConfirmButton:false,
            timer:1200
        });
    };
    
  return (
    <div className="small-container">
    <form onSubmit={handleAddUser}>
      <h3>Add User</h3>
      <label   htmlFor="firstName">firstName</label>
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
        <input type="submit" value="Add" />
        <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAddingUser(false)}
        />
    </div>
    </form>
</div>
)
}

export default Add;