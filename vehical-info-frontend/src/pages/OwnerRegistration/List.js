import { useState, React, useEffect } from 'react'

const List = (props) => {
  const [OwnerDataList, setOwner] = useState();

  useEffect(()=>{
    setOwner(props.OwnerData);
    console.log("----Ownerdata----",props.OwnerData);
  },[]);
  
  return (
    <div className="contain-table" style={{width:'96%',marginLeft:'2%' }  }>
    <table className="striped-table">
      <thead>
        <tr>
          <th>Id</th>
          <th> First Name</th>
          <th>Last Name</th>
          <th>DOB</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Business Phone No</th>
          <th>Business Email</th>
          <th>Pin Code</th>
          <th>State</th>
          <th>Company Name </th>
          <th>Type Of Business</th>
          <th>Registration Date</th>
          <th>Company Description</th>
          <th>Office Address</th>
          <th>City</th>
          <th>Country</th>
          <th>GST Number</th>
          <th>Created</th>
          <th>Modified</th>

          <th colSpan={2} className="text-center">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {OwnerDataList ? (
          OwnerDataList.map((data, i) => (
            <tr key={data.id}>
              <td>{i + 1}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.dob}</td>
              <td>{data.email}</td>
              <td>{data.phone_no}</td>
              <td>{data.business_phone_no}</td>
              <td>{data.business_email}</td>
              <td>{data.pin_code}</td>
              <td>{data.state}</td>
              <td>{data.company_name}</td>
              <td>{data.type_of_business}</td>
              <td>{data.registration_date}</td>
              <td>{data.company_description}</td>
              <td>{data.office_address}</td>
              <td>{data.city}</td>
              <td>{data.counrty}</td>
              <td>{data.GST_number}</td>
              <td>{data.created}</td>
              <td>{data.modified}</td>
              <td className="text-right">
                <button
                  onClick={() => props.handleEditOwner(data.id)}
                  className="button muted-button"
                >
                  Edit
                </button>
              </td>
              <td className="text-left">
                <button
                  onClick={() => props.handleDeleteOwner(data.id)}
                  className="button muted-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={7}><h1>No Owner</h1></td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  )
}

export default List;