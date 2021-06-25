import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { NavLink } from 'react-router-dom'
import { useHistory } from "react-router";

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
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item name='İnsan Kaynakları Yönetim Sistemi' as={NavLink} to="/" />
                    <Menu.Menu position='right'>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
