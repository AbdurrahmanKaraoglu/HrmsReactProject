import React from 'react'
import _ from 'lodash'
import { Dropdown } from 'semantic-ui-react'

const getOptions = (number, prefix = 'Choice ') =>
    _.times(number, (index) => ({
        key: index,
        text: `${prefix}${index}`,
        value: index,
    }))

const DropdownExampleCloseOnChange = () => (
    <>
        <Dropdown
            multiple
            selection
           
            placeholder='Choose an option'
        />{' '}
        <Dropdown
            multiple
            search
            selection
            closeOnChange
            options={getOptions(5)}
            placeholder='Location'
        />
        <Dropdown
            multiple
            search
            selection
            options={getOptions(5)}
            placeholder='Job Type'
        />
        <Dropdown
            multiple
            search
            selection
            options={getOptions(5)}
            placeholder='Salary Range'
        />
    </>
)

export default DropdownExampleCloseOnChange
