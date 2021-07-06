import React, { useState } from 'react'
import { ImManWoman } from 'react-icons/im'
import { IoMdBusiness } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { Button } from '../../Button'
import { IconContext } from 'react-icons/lib'
import './signIn.css'
import { useHistory } from "react-router";
import SignedOut from '../../../layouts/SignedOut'
import SignedIn from '../../../layouts/SignedIn'

function SignIn({signOut}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history = useHistory()

    function handleSignOut() {
        setIsAuthenticated(false);
        history.push("/")
    }
    function handleSignIn() {
        setIsAuthenticated(true);
    }
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div>
                <div className='signin__section'>
                    <div className='signin__wrapper'>
                        <h1 className='signin__heading'>Giriş Yap</h1>
                        <div className='signin__container'>
                            <Link to='/sign-in-jobseeker' className='signin__container-card'>
                                <div className='signin__container-cardInfo'>
                                    <div className='icon'>
                                        <ImManWoman />
                                    </div>
                                    <h3>İş Arayan</h3>
                                    <Button buttonSize='btn--wide' buttonColor='primary'
                                    onClick={isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
                                    >
                                        Seç
                                    </Button>
                                </div>
                            </Link>
                            <Link to='/sign-in-employer' className='signin__container-card'>
                                <div className='signin__container-cardInfo'>
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

export default SignIn
