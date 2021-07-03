import React from 'react'
import "./sidebar.css"
import { Dashboard, Edit, Business, Home, Apps, PostAdd, PowerSettingsNew, DeleteForever, List } from '@material-ui/icons';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 5,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#2962ff',
    },
}))(LinearProgress);

export default function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/%C3%9Clker_logo.svg/1024px-%C3%9Clker_logo.svg.png" alt="" className="ımage" />
                            <h4 className="sidebarListCompanyName">Ülker</h4>

                        </li>
                       
                      
                        {/* <hr />
                        <br />
                        <li className="profile">
                            <span className="spanprofile"> Profile</span>
                            <span className="spanprofilevalue">80%</span>
                            <BorderLinearProgress variant="determinate" value={80} />
                        </li> */}
                        <br />
                        <hr />

                        <Link to={"/"}>
                            <li className="sidebarListItem">
                                <Home className="sidebarIcon" />
                                Ana Sayfa
                            </li>
                        </Link>

                        <Link to={"/dashboard/employer/1"}>
                            <li className="sidebarListItem">
                                <Dashboard className="sidebarIcon" />
                                Dashboard
                            </li>
                        </Link>
                        <Link to={"/update/employer"}>
                            <li className="sidebarListItem">
                                <Edit className="sidebarIcon" />
                                Profili Düzenle
                            </li>
                        </Link>
                        <Link to={"/profile/employer"}>
                            <li className="sidebarListItem">
                                <Business className="sidebarIcon" />
                                Şirket Sayfası
                            </li>
                        </Link>
                        {/* <li className="sidebarListItem">
                            <Work className="sidebarIcon" />
                            İşleri Yönet
                        </li>
                        <li className="sidebarListItem">
                            <Apps className="sidebarIcon" />
                            Uygulama
                        </li> */}
                        <Link to={"/myjobpostings"}>
                            <li className="sidebarListItem">
                                <List className="sidebarIcon" />
                                İlanlarım
                            </li>
                        </Link>
                        <Link to={"/jobposting/add"}>
                            <li className="sidebarListItem">
                                <PostAdd className="sidebarIcon" />
                                Yeni İş İlanı Yayınla
                            </li>
                        </Link>

                        <br />
                        <hr />
                        <Link to={"/delete/employer"}>
                            <li className="sidebarListItem sidebarListItemDelete">
                                <DeleteForever className="sidebarIcon" />
                                Profili Sil
                            </li>
                        </Link>

                        <hr />
                        <br />

                        <Link to={"/"}>
                            <li className="sidebarListItem">
                                <PowerSettingsNew className="sidebarIcon" />
                                Çıkış Yap
                            </li>
                        </Link>


                    </ul>
                </div>
            </div >


        </div >
    )
}