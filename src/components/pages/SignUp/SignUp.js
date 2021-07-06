import React from 'react'
import { ImManWoman } from 'react-icons/im'
import { IoMdBusiness } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { Button } from '../../Button'
import { IconContext } from 'react-icons/lib'
import './signup.css'

function SignUp() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div>
                <div className='signup__section'>
                    <div className='signup__wrapper'>
                        <h1 className='signup__heading'>Üye Ol</h1>
                        <div className='signup__container'>
                            <Link to='/sign-up-jobseeker' className='signup__container-card'>
                                <div className='signup__container-cardInfo'>
                                    <div className='icon'>
                                        <ImManWoman />
                                    </div>
                                    <h3>İş Arayan</h3>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        Seç
                                    </Button>
                                </div>
                            </Link>
                            <Link to='/sign-up-employer' className='signup__container-card'>
                                <div className='signup__container-cardInfo'>
                                    <div className='icon'>
                                        <IoMdBusiness />
                                    </div>
                                    <h3>İş Veren</h3>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        Seç
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default SignUp
