import React from 'react'
import { Button, Menu } from 'semantic-ui-react'


export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button primary>Sign up</Button>
                <Button onClick={signIn} secondary style={{ marginLeft: "0.5em" }}>Sign in</Button>
            </Menu.Item>
        </div>
    )
}
