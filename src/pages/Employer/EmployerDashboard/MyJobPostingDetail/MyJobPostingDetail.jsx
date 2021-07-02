import React from 'react'
import {
    LocationOn,
    SupervisorAccount,
    CalendarToday,
    AttachMoney,
    Description,
    Work, Event
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import './myJobPostingDetail.css'

export default function MyJobPostingDetail() {
    return (
        <div className="myJobPostingDetail">
            <div className="userTitleContainer">
                <h1 className="userTitle">İlan Detayı</h1>
                <Link to="/update/myjobposting/1">
                    <button className="userAddButton">İlanı Düzenle</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowBottom">
                        <span className="userShowTitle">İlan Detayları</span>

                        <div className="userShowInfo">
                            <LocationOn className="userShowIcon" />
                            {/* phoneNumber */}
                            <span className="userShowInfoTitle">Adana</span>
                        </div>

                        <div className="userShowInfo">
                            <Work className="userShowIcon" />
                            {/* email */}
                            <span
                                className="userShowInfoTitle">Java Developer</span>
                        </div>

                        <div className="userShowInfo">
                            <Description className="userShowIcon" />
                            <span
                                className="userShowInfoTitle">Açıklama Metni</span>
                        </div>

                        <div className="userShowInfo">
                            <AttachMoney className="userShowIcon" />
                            <span className="userShowInfoTitle">minimumSalary</span>
                        </div>

                        <div className="userShowInfo">
                            <AttachMoney className="userShowIcon" />
                            <span className="userShowInfoTitle">maximumSalary</span>
                        </div>
                        <div className="userShowInfo">
                            <SupervisorAccount className="userShowIcon" />
                            <span
                                className="userShowInfoTitle">Açık Pozisyon Sayısı : </span>
                        </div>

                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">Yayınlanma Tarihi</span>
                        </div>

                        <div className="userShowInfo">
                            <Event className="userShowIcon" />
                            <span className="userShowInfoTitle">Son Başvuru Tarihi</span>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
}