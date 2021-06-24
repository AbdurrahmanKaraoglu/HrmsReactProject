import React from 'react'
import { Checkbox, Input, Menu } from 'semantic-ui-react'
import './FilterSubMenu.css'

export default function FilterSubMenu() {
    return (
        <div class="myDiv">
            <Menu vertical>
                <Menu.Item>
                    <Input placeholder='Search...' />
                </Menu.Item>
                <Menu.Item>
                    <h3>
                        Home
                    </h3>
                    <Menu.Menu>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <h3>
                        Home
                    </h3>
                    <Menu.Menu>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <h3>
                        Home
                    </h3>
                    <Menu.Menu>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <h3>
                        Home
                    </h3>
                    <Menu.Menu>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                        <Menu.Item>
                            <Checkbox label={{ children: 'Make my profile visible' }} />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        </div>
    )
}


