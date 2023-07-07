import React from 'react'

const Header = ({setIsAddingVehicle}) => {
  return (
    <header>
      <h3>Vehicle Registration</h3>
      <div style={{marginTop:'30px',marginBottom:"11px"   }}>
        <button onClick={() => setIsAddingVehicle(true)} className='square-button'>Add Vehicle</button>
      </div>
    </header>
  )
}

export default Header;