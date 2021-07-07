import React from 'react'
import { FaFire } from 'react-icons/fa'
import { BsXDiamondFill } from 'react-icons/bs'
import { GiCrystalize } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { Button } from '../../Button'
import { IconContext } from 'react-icons/lib'
import './userTypes.css'



function UserTypes() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div>
                <div className='usertypes__section'>
                    <div className='usertypes__wrapper'>
                        <h1 className='usertypes__heading'>Kullanıcı Türü</h1>
                        <div className='usertypes__container'>
                            <Link to='/dashboard/employer' className='usertypes__container-card'>
                                <div className='usertypes__container-cardInfo'>
                                    <div className='icon'>
                                        <FaFire />
                                    </div>
                                    <h3>İş Arayan</h3>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        Seç
                                    </Button>
                                </div>
                            </Link>
                            <Link to='/dashboard/employer' className='usertypes__container-card'>
                                <div className='usertypes__container-cardInfo'>
                                    <div className='icon'>
                                        <BsXDiamondFill />
                                    </div>
                                    <h3>İş Veren</h3>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                         Seç
                                    </Button>
                                </div>
                            </Link>
                            <Link to='/sign-up' className='usertypes__container-card'>
                                <div className='usertypes__container-cardInfo'>
                                    <div className='icon'>
                                        <GiCrystalize />
                                    </div>
                                    <h3>Sistem Personeli</h3>
                                  
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

export default UserTypes;