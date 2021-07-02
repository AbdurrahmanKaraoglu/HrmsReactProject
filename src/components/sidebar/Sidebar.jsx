import React from 'react'
import "./sidebar.css"
import { Dashboard, Edit, Business, Work, Apps, PostAdd, PowerSettingsNew, DeleteForever, List } from '@material-ui/icons';
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
                        <li className="sidebarListItem">
                            <img src="https://avatars.githubusercontent.com/u/74272647?s=400&u=5d48bfa58627f417e64727a5a8528e024bb85246&v=4" alt="" className="ımage" />
                            <div className="companyUser">
                            </div>
                        </li>
                        <li className="sidebarListItem">
                            <span className="companyName">Company Name</span>
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
                        <li className="sidebarListItem">
                            <DeleteForever className="sidebarIcon" />
                            Profili Sil
                        </li>
                        <hr />
                        <br />
                        <li className="sidebarListItem">
                            <PowerSettingsNew className="sidebarIcon" />
                            Çıkış Yap
                        </li>
                       
                    </ul>
                </div>
            </div >


        </div >
    )
}