import React from 'react'
import AccordionMenu from './AccordionMenu'
import FilterMenu from './FilterMenu'
import JobSortBy from './JobSortBy'
import Footer from './Footer'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router'
import JobPostingFormList from '../pages/JobPostingFormList'
import JobPostingFormDetail from '../pages/JobPostingFormDetail'
import EmployerList from '../pages/EmployerList'
import JobPositionList from '../pages/JobPositionList'
import JobSeekerList from '../pages/JobSeekerList'
import JobPostingFormReleaseDateList from '../pages/JobPostingFormReleaseDateList'
import JobPostingFormEmployerCompanyNameList from '../pages/JobPostingFormEmployerCompanyNameList'


export default function Dashboard() {
    return (
        <div>
            <FilterMenu />
            <JobSortBy />



            <Grid>
                <Grid.Row >
                    <Grid.Column width={3}>
                        <AccordionMenu />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Route exact path="/" component={JobPostingFormList} />

                        <Route exact path="/jobpostingform" component={JobPostingFormList} />

                        <Route exact path="/activejobpostings" component={JobPostingFormList} />
                        

                        <Route exact path="/activejobpostingssortedbydate" component={JobPostingFormReleaseDateList} />

                        <Route path="/activejobpostingsofafirms/:name" component={JobPostingFormEmployerCompanyNameList} />

                        <Route path="/jobpostingform/:id" component={JobPostingFormDetail} />
                        <Route path="/employers" component={EmployerList} />
                        <Route path="/jobpositions" component={JobPositionList} />
                        <Route path="/jobseekers" component={JobSeekerList} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Footer />
        </div>
    );
}

// 2:09:01