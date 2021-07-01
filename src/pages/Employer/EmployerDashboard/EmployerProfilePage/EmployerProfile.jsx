import React from 'react'
import {
    LocationOn,
    MailOutline,
    Language,
    PhoneAndroid
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import './employerProfile.css'

export default function EmployerProfile() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Şirket Profili</h1>
                <Link to="/update/employer">
                    <button className="userAddButton">Profili Düzenle</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                        //companyPictureAddress
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/%C3%9Clker_logo.svg/1024px-%C3%9Clker_logo.svg.png"
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                        {/* companyName */}
                            <h2 className="userShowUsername">Ülker</h2>
                            <span className="userShowUserTitle">Gıda Üretim Ve Pazarlama</span>
                        </div>
                    </div>
                    
                    <div className="userShowBottom">
                      
                        <span className="userShowTitle">İletişim Detayları</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            {/* phoneNumber */}
                            <span className="userShowInfoTitle">0222 222 22 22</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            {/* email */}
                            <span 
                            className="userShowInfoTitle">info@ulker.com</span>
                        </div>
                        
                        <div className="userShowInfo">
                            <Language className="userShowIcon" />
                        {/* webAddress */}
                            <span 
                            className="userShowInfoTitle">www.ulker.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationOn className="userShowIcon" />
                            <span className="userShowInfoTitle">İstanbul | Türkiye</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
