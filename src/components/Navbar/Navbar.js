import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GiHumanPyramid } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from '../Button'
import './navbar.css'
import { IconContext } from 'react-icons/lib'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

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
            <IconContext.Provider value={{ color: '#fff' }}>
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
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar