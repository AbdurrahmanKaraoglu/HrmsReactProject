import React from 'react'
import { AiOutlineMail,AiOutlinePhone } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons/lib'
import './contact.css'

function Contact() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div>
                <div className='contact__section'>
                    <div className='contact__wrapper'>
                        <h1 className='contact__heading'>Bizimle İletişime Geçin</h1>
                        <div className='contact__container'>
                            <Link to='#' className='contact__container-card'>
                                <div className='contact__container-cardInfo'>
                                    <div className='icon'>
                                        <AiOutlinePhone />
                                    </div>
                                    <h3>Telefon</h3>
                                    <ul className='contact__container-features'>
                                        <li>0555 555 55 55</li>
                                        <li>0111 111 11 11</li>
                                        <li>0323 333 33 33</li>
                                    </ul>
                                </div>

                            </Link>
                            <Link to='#' className='contact__container-card'>
                                <div className='contact__container-cardInfo'>
                                    <div className='icon'>
                                        <AiOutlineMail />
                                    </div>
                                    <h3>Email</h3>
                                    <ul className='contact__container-features'>
                                        <li>info@hrms.com</li>
                                        <li>hrms@hotmail.com</li>
                                        <li>hrms@gmail.com</li>
                                    </ul>
                                </div>
                            </Link>
                            <Link to='#' className='contact__container-card'>
                                <div className='contact__container-cardInfo'>
                                    <div className='icon'>
                                        <FiMapPin />
                                    </div>
                                    <h3>Konum</h3>
                                    <ul className='contact__container-features'>
                                        <li> Osmaniye / Türkiye</li>
                                        <li>Kadirli / Osmaniye</li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Contact
