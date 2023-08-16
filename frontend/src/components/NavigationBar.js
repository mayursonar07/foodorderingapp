import React from 'react'
import logo from '../../public/foodville.png'
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className='main-nav'>
          <Link to="/"> {/* To take us back to homepage */}
            <div className='logo'>
              <img src={logo} style={{width: '210px', marginTop:'15px', marginLeft: '10px' }}/>
            </div> 
          </Link>
          <div className='menu-link'>   
            <ul>
              
              <li className="nav-list-item">
                <Link to="/courses" className='nav-Link-item'>Search</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/courses" className='nav-Link-item'>Offers</Link>
              </li>
              <li>
                <Link to="/contact" className='nav-Link-item'>Help</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
}

export default NavigationBar

