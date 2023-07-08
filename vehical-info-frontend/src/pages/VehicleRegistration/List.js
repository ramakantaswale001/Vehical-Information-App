import { useState, React, useEffect } from 'react'

const List = (props) => {
  const [VehicleDataList, setVehicle] = useState();

  useEffect(()=>{
    setVehicle(props.VehicleData);
    console.log("----Vehicledata----",props.VehicleData);
  },[]);
  
  return (
    <div className="contain-table" style={{width:'96%',marginLeft:'2%' }  }>
    <table className="striped-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Vehicle Type Id</th>
          <th>Seating Capacity</th>
          <th>Vehicle Image Id</th>
          <th>Type Of Vehicle</th>
          <th>Rate Per Km</th>
          <th>Rent Amount</th>
          <th>Owner Id</th>
          <th colSpan={2} className="text-center">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {VehicleDataList ? (
          VehicleDataList.map((data, i) => (
            <tr key={data.id}>
              <td>{i + 1}</td>
              <td>{data.vehicle_type_id}</td>
              <td>{data.seating_capacity}</td>
              <td>{data.vehicle_image_id}</td>
              <td>{data.type_of_vehicle}</td>
              <td>{data.rate_per_km}</td>
              <td>{data.rent_amount}</td>
              <td>{data.owner_id}</td>
              <td className="text-right">
                <button
                  onClick={() => props.handleEditVehicle(data.id)}
                  className="button muted-button"
                >
                  Edit
                </button>
              </td>
              <td className="text-left">
                <button
                  onClick={() => props.handleDeleteVehicle(data.id)}
                  className="button muted-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={7}><h1>No Vehicle</h1></td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  )
}

export default List;