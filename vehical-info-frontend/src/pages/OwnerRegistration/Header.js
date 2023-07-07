import React from 'react'

const Header = ({setIsAddingUser}) => {
  return (
    <header>
      <h3>Owner Registration</h3>
      <div style={{marginTop:'30px',marginBottom:"11px"   }}>
        <button onClick={() => setIsAddingUser(true)} className='square-button'>Add User</button>
      </div>
    </header>
  )
}

export default Header;