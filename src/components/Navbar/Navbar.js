import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GiHumanPyramid } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from '../Button'
import { IconContext } from 'react-icons/lib'
import Dropdown from './Dropdown'
import './Navbar.css'




function Navbar() {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };

    
    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#c62828' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <GiHumanPyramid className='navbar-icon' />
                            HRMS
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Ana Sayfa
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/jobsearch' className='nav-links' onClick={closeMobileMenu}>
                                    İş Ara
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                    Hizmetler
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                    İletişim
                                </Link>
                            </li>

                            <li
                                className='nav-item'
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                            >
                                <Link
                                    to='/usertypes'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Dashboard
                                    {/* <i className='fas fa-caret-down' /> */}
                                </Link>
                                {/* {dropdown && <Dropdown />} */}
                            </li>
                            <li className='nav-btn'>
                                {button ? (
                                    <Link to='/sign-up' className='btn-link'>
                                        <Button buttonStyle='btn--outline'>Üye Ol</Button>
                                    </Link>
                                ) : (
                                    <Link to='/sign-up' className='btn-link'>
                                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobileMenu}>Üye Ol</Button>
                                    </Link>
                                )}
                            </li>
                            <li className='nav-btn'>
                                {button ? (
                                    <Link to='/sign-in' className='btn-link'>
                                        <Button buttonStyle='btn--outline'>Giriş Yap</Button>
                                    </Link>
                                ) : (
                                    <Link to='/sign-in' className='btn-link'>
                                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobileMenu}>Giriş Yap</Button>
                                    </Link>
                                )}
                            </li>
                            {/* <li class="nav-btn">

                                <Link to='#' className='nav-links' onClick={closeMobileMenu}>
                                    Abdurrahman Karaoğlu
                                </Link>
                            </li>
                            <li class="nav-btn">
                                <Avatar src="https://avatars.githubusercontent.com/u/74272647?v=4" />
                            </li> */}

                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar