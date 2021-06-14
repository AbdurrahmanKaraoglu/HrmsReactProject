import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

export default function JobList() {
    return (
        <div>
            <Grid columns='three' divided>

                <Grid.Row>

                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/logo.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/logo.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/logo.png' />
                    </Grid.Column>

                </Grid.Row>


                <Grid.Row>

                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/logo.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/logo.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/logo.png' />
                    </Grid.Column>

                </Grid.Row>


            </Grid>
        </div>
    )
}
