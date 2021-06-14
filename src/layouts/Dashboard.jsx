import React from 'react'
import Navi from './Navi'
import AccordionMenu from './AccordionMenu'
import JobList from '../pages/JobList'
import FilterMenu from './FilterMenu'
import JobSortBy from './JobSortBy'
import Footer from './Footer'

export default function Dashboard() {
    return (
        <div>
            <Navi/>
            <FilterMenu/>
            <JobSortBy/>
            <AccordionMenu/>
            
            <JobList/>
            <Footer/>
        </div>
    )
}
