import React from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>

            <Menu inverted size='large'>
                <Container>
                    <Menu.Item name='home' />
                    <Menu.Item name='messages' />

                    <Menu.Menu position='right'>
                        <Dropdown item text='Language'>
                            <Dropdown.Menu>
                                <Dropdown.Item>English</Dropdown.Item>
                                <Dropdown.Item>Russian</Dropdown.Item>
                                <Dropdown.Item>Spanish</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Menu.Item>
                            <div>
                                <Button content='primary'>Sign Up</Button>
                                <Button content='Secondary'>Sign In</Button>
                            </div>

                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>

        </div>
    )
}
