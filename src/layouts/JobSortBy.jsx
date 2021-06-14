import React from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default function JobSortBy() {
    return (
        <div>
            <Container>

                <Menu text widths>
                    <Menu.Item header>Sort By</Menu.Item>
                    <Menu.Item name='closest' />
                    <Menu.Item name='mostComments' />
                    <Menu.Item name='mostPopular' />
                </Menu>


            </Container>
        </div>
    )
}
