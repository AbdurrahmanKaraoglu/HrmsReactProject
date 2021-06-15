import React from 'react'
import { Menu, Dropdown,Image } from 'semantic-ui-react'

export default function SignedIn() {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/74272647?s=400&u=5d48bfa58627f417e64727a5a8528e024bb85246&v=4" />
                <Dropdown pointing="top left" text="Abdurrahman">
                    <Dropdown.Menu>
                        <Dropdown.Item text="My Information" icon="info" />
                        <Dropdown.Item text="Sign Out" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
