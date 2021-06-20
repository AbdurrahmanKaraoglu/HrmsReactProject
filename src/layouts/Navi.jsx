import React, { useState } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { NavLink } from 'react-router-dom'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

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
                    <Dropdown item text='Lists'>
                        <Dropdown.Menu>
                            <Dropdown.Item as={NavLink} to="jobpositions">JobPosition</Dropdown.Item>

                            <Dropdown.Item as={NavLink} to="employers">Employer</Dropdown.Item>

                            <Dropdown.Item as={NavLink} to="jobseekers">JobSeeker</Dropdown.Item>

                            <Dropdown.Item as={NavLink} to="activejobpostings">Active Job Postings</Dropdown.Item>

                            <Dropdown.Item as={NavLink} to="activejobpostingssortedbydate">Active Job Postings Sorted by Date</Dropdown.Item>

                            <Dropdown.Item as={NavLink} to="activejobpostingsofafirms">Active Job Postings of a Firm</Dropdown.Item>

                            <Dropdown.Item as={NavLink} to="allcvinformationofthecandidate">All CV Information of the Candidate</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>


                    <Menu.Menu position='right'>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}


                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
