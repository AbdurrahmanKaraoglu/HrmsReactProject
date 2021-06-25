import React from 'react'
import {Menu,Button } from 'semantic-ui-react'
import { useHistory } from "react-router";

// const options = [
//     {
//         key: 'new',
//         text: 'new',
//         value: 'new',
//         content: 'Yeniden Eskiye',
//     },
//     // {
//     //     key: 'suggested',
//     //     text: 'suggested',
//     //     value: 'suggested',
//     //     content: 'Önerilen',
//     // },
// ]




export default function JobSortBy() {
    const history = useHistory()
    function handleDropdownClick () {
        history.push('/activejobpostingssortedbydatepage')
    }
        
    return (
        <div>
            <Menu>
                <Menu.Menu position='right'>
                    {/* <Dropdown
                        item
                        simple
                        text='Sıralama'
                        direction='right'
                        options={options}
                        onClick={handleDropdownClick}
                        selection
                    /> */}
                    <Button  onClick={handleDropdownClick}> Sırala</Button>
                </Menu.Menu>
            </Menu>
        </div>
    )
}
