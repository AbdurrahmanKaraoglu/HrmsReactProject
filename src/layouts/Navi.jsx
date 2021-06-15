import React, { useState } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSignOut() {
        setIsAuthenticated(false);
    }
    function handleSignIn() {
        setIsAuthenticated(true);
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item name='Human Resource Management System' />
                    <Menu.Item name='messages' />
                    <Menu.Menu position='right'>
                        <Dropdown item text='Language'>
                            <Dropdown.Menu>
                                <Dropdown.Item>English</Dropdown.Item>
                                <Dropdown.Item>Russian</Dropdown.Item>
                                <Dropdown.Item>Spanish</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}


                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
