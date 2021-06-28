import React from 'react'
import "./sidebar.css"
import { Dashboard, Edit, Business, Work, Apps, PostAdd, LocalOffer, PowerSettingsNew, DeleteForever, Label } from '@material-ui/icons';
import { Card, Icon, Image } from 'semantic-ui-react'
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height:10,
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
                    <ul>
                    <li className="sidebarListItem">
                            <Card className="card">
                                <img src="https://avatars.githubusercontent.com/u/74272647?s=400&u=5d48bfa58627f417e64727a5a8528e024bb85246&v=4" alt="" className="ımage" />
                                <Card.Content className="cardcontent">
                                    <Card.Header className="cardheader">Company Name</Card.Header>
                                    <Card.Meta className="cardmeta">@username</Card.Meta>
                                </Card.Content>
                            </Card>
                            
                        </li>
                        <br />
                       
                          <label> Profile</label>
                          <label> 80</label>
                          <BorderLinearProgress variant="determinate" value={80} />
                        
                        <br />

                        <li className="sidebarListItem">
                            <Dashboard className="sidebarIcon"/>
                            Dashboard
                        </li>
                        <li className="sidebarListItem">
                            <Edit className="sidebarIcon" />
                            Profili Düzenle
                        </li>
                        <li className="sidebarListItem">
                            <Business className="sidebarIcon" />
                            Şirket Sayfası
                        </li>
                        <li className="sidebarListItem">
                            <Work className="sidebarIcon" />
                            İşleri Yönet
                        </li>
                        <li className="sidebarListItem">
                            <Apps className="sidebarIcon" />
                            Uygulama
                        </li>
                        <li className="sidebarListItem">
                            <PostAdd className="sidebarIcon" />
                            Yeni İş İlanı Yayınla
                        </li>
                        <hr />
                        <br />
                        <li className="sidebarListItem">
                            <PowerSettingsNew className="sidebarIcon" />
                            Çıkış Yap
                        </li>
                        <li className="sidebarListItem">
                            <DeleteForever className="sidebarIcon" />
                            Profili Sil
                        </li>
                    </ul>
                </div>
            </div>
             
        </div>
    )
}