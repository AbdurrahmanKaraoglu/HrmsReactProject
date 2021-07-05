import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import SignedOut from '../SignedOut'
import SignedIn from '../SignedIn'
import { NavLink } from 'react-router-dom'
import { useHistory } from "react-router";
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import "./navi.css"

export default function Navi() {
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
        <div>
            <Menu>
                <Container>
                    <Menu.Item name='İnsan Kaynakları Yönetim Sistemi' as={NavLink} to="/" />
                    <Menu.Menu position='right'>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu> 



            {/* <div className="topbar">
                <div className="topbarWrapper">
                    <div className="topLeft">
                        <span className="logo">İnsan Kaynakları Yönetim Sistemi</span>
                    </div>
                    <div className="topRight">
                        <div className="topbarIconContainer">
                            <NotificationsNone />
                            <span className="topIconBadge">3</span>
                        </div>
                        <div className="topbarIconContainer">
                            <Language />
                            <span className="topIconBadge">3</span>
                        </div>
                        <div className="topbarIconContainer">
                            <Settings />
                        </div>
                        <img src="https://avatars.githubusercontent.com/u/74272647?s=400&u=5d48bfa58627f417e64727a5a8528e024bb85246&v=4" alt="" className="topAvatar" />
                    </div>
                </div>
            </div> */}
        </div>
    )
}
