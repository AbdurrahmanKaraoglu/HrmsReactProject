import React from 'react'
import JobSortBy from './JobSortBy'
import Footer from './FooterLayouts/Footer'
import { Grid, Container } from 'semantic-ui-react'
import { Route } from 'react-router'

import JobPostingFormList from '../pages/Employer/JobPostingForm/JobPostingFormList'

import EmployerList from '../pages/Employer/EmployerList'

import JobPositionList from '../pages/Employee/JobPosition/JobPositionList'
import JobSeekerList from '../pages/JobSeeker/JobSeekerList'

import JobPostingFormReleaseDateList from '../pages/Employer/JobPostingForm/JobPostingFormReleaseDate/JobPostingFormReleaseDateList'

import JobPostingFormEmployerCompanyNameList from '../pages/Employer/JobPostingForm/JobPostingFormEmployerCompanyName/JobPostingFormEmployerCompanyNameList'

import JobSeekerResumeList from '../pages/Resume/JobSeekerResumeList'

import JobSeekerResumePage from '../pages/Resume/JobSeekerResumePage/JobSeekerResumePage'

import HomePage from '../pages/HomePage/HomePage'
import JobPostingFormReleaseDatePage from '../pages/Employer/JobPostingForm/JobPostingFormReleaseDate/JobPostingFormReleaseDatePage'

import HomePageDetail from '../pages/HomePage/HomePageDetail'

import JobPostingFormAdd from '../pages/Employer/JobPostingForm/JobPostingFormAdd/JobPostingFormAdd'

import FilterSubMenu from './FilterSubMenuLayouts/FilterSubMenu'


import Topbar from '../components/topbar/Topbar'


export default function Dashboard() {
    return (

        <div>
            {/* <FilterSubMenu /> */}
            
            <Grid>
                <Grid.Row >
                    <Grid.Column width={4}>
                    <FilterSubMenu/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                    <JobSortBy />

                   
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        
    );
}

// 2:09:01