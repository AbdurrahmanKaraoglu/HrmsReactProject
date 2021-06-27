import React from 'react'
import "./sidebar.css"
import { Dashboard, Edit, Business, Work, Apps, PostAdd, LocalOffer, PowerSettingsNew, DeleteForever } from '@material-ui/icons';
import { Card, Icon, Image } from 'semantic-ui-react'

export default function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="">
                        <li>
                            <Card>
                                <img src="https://avatars.githubusercontent.com/u/74272647?s=400&u=5d48bfa58627f417e64727a5a8528e024bb85246&v=4" alt="" className="ımage" />
                                <Card.Content>
                                    <Card.Header>Company Name</Card.Header>
                                    <Card.Meta>@username</Card.Meta>
                                </Card.Content>
                            </Card>
                        </li>
                        <li className="sidebarListItem">
                            Progress Olacak
                        </li>

                        <li className="sidebarListItem">
                            <Dashboard />
                            Dashboard
                        </li>
                        <li className="sidebarListItem">
                            <Edit />
                            Edit Profile
                        </li>
                        <li className="sidebarListItem">
                            <Business />
                            Company Page
                        </li>
                        <li className="sidebarListItem">
                            <Work />
                            Manage Jobs
                        </li>
                        <li className="sidebarListItem">
                            <Apps />
                            Application
                        </li>
                        <li className="sidebarListItem">
                            <PostAdd />
                            Post New Job
                        </li>
                        <li className="sidebarListItem">
                            <LocalOffer />
                            Pricing Plans
                        </li>
                        <hr />
                        <br />
                        <li className="sidebarListItem">
                            <PowerSettingsNew />
                            Log out
                        </li>
                        <li className="sidebarListItem">
                            <DeleteForever />
                            Delete Profile
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}