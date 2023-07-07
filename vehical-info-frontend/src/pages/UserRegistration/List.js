import { useState, React, useEffect } from 'react'

const List = (props) => {
  const [UserDataList, setUser] = useState();

  useEffect(()=>{
    setUser(props.UserData);
    console.log("----Userdata----",props.UserData);
  },[]);
  
  return (
    <div className="contain-table" style={{width:'96%',marginLeft:'2%' }  }>
    <table className="striped-table">
      <thead>
        <tr>
          <th>Id</th>
          <th> First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Address</th>
          <th> Pin Code</th>
          <th>Photo</th>
          <th colSpan={2} className="text-center">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {UserDataList ? (
          UserDataList.map((data, i) => (
            <tr key={data.id}>
              <td>{i + 1}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.email}</td>
              <td>{data.phone_no}</td>
              <td>{data.address}</td>
              <td>{data.pin_code}</td>
              <td>{data.photo}</td>
              <td className="text-right">
                <button
                  onClick={() => props.handleEditUser(data.id)}
                  className="button muted-button"
                >
                  Edit
                </button>
              </td>
              <td className="text-left">
                <button
                  onClick={() => props.handleDeleteUser(data.id)}
                  className="button muted-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={7}><h1>No User</h1></td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  )
}

export default List;