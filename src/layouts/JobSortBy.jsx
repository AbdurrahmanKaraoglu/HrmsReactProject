import React from 'react'
import { Header, Icon, Dropdown, Container, Menu } from 'semantic-ui-react'

const options = [
    {
        key: 'today',
        text: 'today',
        value: 'today',
        content: 'Today',
    },
    {
        key: 'this week',
        text: 'this week',
        value: 'this week',
        content: 'This Week',
    },
    {
        key: 'this month',
        text: 'this month',
        value: 'this month',
        content: 'This Month',
    },
]
export default function JobSortBy() {
    return (
        <div>
            <Menu>
                <Menu.Menu position='right'>
                    <Dropdown
                        item
                        simple
                        text='Sort By'
                        direction='right'
                        options={options}
                    />
                </Menu.Menu>
            </Menu>
        </div>
    )
}
