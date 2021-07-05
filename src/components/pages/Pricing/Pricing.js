import React from 'react'
import { FaFire } from 'react-icons/fa'
import { BsXDiamondFill } from 'react-icons/bs'
import { GiCrystalize } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { Button } from '../../Button'
import { IconContext } from 'react-icons/lib'
import './pricing.css'

function Pricing() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div>
                <div className='pricing__section'>
                    <div className='pricing__wrapper'>
                        <h1 className='pricing__heading'>Fiyatlandırma</h1>
                        <div className='pricing__container'>
                            <Link to='/sign-up' className='pricing__container-card'>
                                <div className='pricing__container-cardInfo'>
                                    <div className='icon'>
                                        <FaFire />
                                    </div>
                                    <h3>Temel Plan</h3>
                                    <h4>$28.99</h4>
                                    <p>her ay</p>
                                    <ul className='pricing__container-features'>
                                        <li>5 İş İlanı</li>
                                        <li>2 Öne Çıkan İş</li>
                                        <li>1 İşleri Yenile</li>
                                        <li>10 Gün Süre</li>
                                        <li>E-mail Alarmı</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        Planı Seç
                                    </Button>
                                </div>
                            </Link>
                            <Link to='/sign-up' className='pricing__container-card'>
                                <div className='pricing__container-cardInfo'>
                                    <div className='icon'>
                                        <BsXDiamondFill />
                                    </div>
                                    <h3>Premium Plan</h3>
                                    <h4>$49.99</h4>
                                    <p>her ay</p>
                                    <ul className='pricing__container-features'>
                                        <li>15 İş İlanı</li>
                                        <li>5 Öne Çıkan İş</li>
                                        <li>2 İşleri Yenile</li>
                                        <li>20 Gün Süre</li>
                                        <li>E-mail Alarmı</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                        Planı Seç
                                    </Button>
                                </div>
                            </Link>
                            <Link to='/sign-up' className='pricing__container-card'>
                                <div className='pricing__container-cardInfo'>
                                    <div className='icon'>
                                        <GiCrystalize />
                                    </div>
                                    <h3>Gelişmiş Plan</h3>
                                    <h4>$69.99</h4>
                                    <p>her ay</p>
                                    <ul className='pricing__container-features'>
                                        <li>25 İş İlanı</li>
                                        <li>10 Öne Çıkan İş</li>
                                        <li>5 İşleri Yenile</li>
                                        <li>30 Gün Süre</li>
                                        <li>E-mail Alarmı</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        Planı Seç
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

export default Pricing;