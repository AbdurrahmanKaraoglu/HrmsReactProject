import React from 'react'
import JobSortBy from './JobSortBy'
import Footer from './FooterLayouts/Footer'
import { Grid, Container } from 'semantic-ui-react'
import { Route } from 'react-router'
import JobPostingFormList from '../pages/JobPostingFormList'
import JobPostingFormDetail from '../pages/JobPostingFormDetail'
import EmployerList from '../pages/EmployerList'
import JobPositionList from '../pages/JobPositionList'
import JobSeekerList from '../pages/JobSeekerList'
import JobPostingFormReleaseDateList from '../pages/JobPostingFormReleaseDateList'
import JobPostingFormEmployerCompanyNameList from '../pages/JobPostingFormEmployerCompanyNameList'
import JobSeekerResumeList from '../pages/JobSeekerResumeList'
import HomePage from '../pages/HomePage/HomePage'
import FilterSubMenu from './FilterSubMenuLayouts/FilterSubMenu'


export default function Dashboard() {
    return (

        <Container>
            {/* <FilterMenu /> */}
            
            <Grid>
                <Grid.Row >
                    <Grid.Column width={4}>
                    <FilterSubMenu/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                    <JobSortBy />
                        <Route exact path="/" component={HomePage} />

                        <Route exact path="/jobpostingform" component={JobPostingFormList} />


                        <Route exact path="/activejobpostings" component={JobPostingFormList} />


                        <Route exact path="/activejobpostingssortedbydate" component={JobPostingFormReleaseDateList} />

                        <Route exact path="/activejobpostingsofafirms/:name" component={JobPostingFormEmployerCompanyNameList} />

                        <Route path="/allcvinformationofthecandidate/:id" component={JobSeekerResumeList} />

                        <Route exact path="/jobpostingform/:id" component={JobPostingFormDetail} />
                        <Route exact path="/employers" component={EmployerList} />
                        <Route exact path="/jobpositions" component={JobPositionList} />
                        <Route exact path="/jobseekers" component={JobSeekerList} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Footer />
        </Container>
        
    );
}

// 2:09:01