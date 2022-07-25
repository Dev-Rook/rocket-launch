import React from 'react'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import './Header.css'

const Header = () => {
  return (
    <nav className="Nav-Bar">
      {/* <div className="Logo-Box"> */}
        <img src={require('../../Assets/Images/Logo.webp')} alt="" className="Logo" />
      {/* </div> */}


      <div className="Dropdown-Links">
        
        <Dropdown className='Drop-Down'>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            History
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Military</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Civilian</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Exploration</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className='Drop-Down'>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Services
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Transportation</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Logistics</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Research & Development</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className='Drop-Down'>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Contact
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Application</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Collaborate</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Report</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  )
}

export default Header