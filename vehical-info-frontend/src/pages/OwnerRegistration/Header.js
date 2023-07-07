import React from 'react'

const Header = ({setIsAddingOwner}) => {
  return (
    <header>
      <h3>Owner Registration</h3>
      <div style={{marginTop:'30px',marginBottom:"11px"   }}>
        <button onClick={() => setIsAddingOwner(true)} className='square-button'>Add Owner</button>
      </div>
    </header>
  )
}

export default Header;