import React from 'react'
import logo from '../../public/foodville.png'
import { Link } from 'react-router-dom';
import { Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, useMediaQuery } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const NavigationBar = () => {

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
        <nav className='main-nav'>
          <Link to="/"> {/* To take us back to homepage */}
            <div className='logo'>
              <img src={logo} style={{width: '210px', marginTop:'15px', marginLeft: '10px' }}/>
            </div> 
          </Link>
          {isMobile
          ?
          <div className='menu-link'>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
                background='none'
                border='none'
                float='right'
                mt='20px'
                width='0px'
              />
              <MenuList>
                <MenuItem>
                  <Link to="/search" className='nav-Link-item'>Search</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/offers" className='nav-Link-item'>Offers</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/help" className='nav-Link-item'>Help</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/cart" className='nav-Link-item'>Cart</Link>
                  <Text>0</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          :
          <div className='menu-link'>   
            <ul>
              
              <li className="nav-list-item">
                <Link to="/search" className='nav-Link-item'>Search</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/offers" className='nav-Link-item'>Offers</Link>
              </li>
              <li>
                <Link to="/help" className='nav-Link-item'>Help</Link>
              </li>
              <li>
                <Link to="/cart" className='nav-Link-item'>Cart  <span style={{color:'green', borderRadius:'25px', border:'solid green', width:'15px'}}>0</span></Link>
              </li>
            </ul>
          </div>    
        }
        </nav>
      );
}

export default NavigationBar

