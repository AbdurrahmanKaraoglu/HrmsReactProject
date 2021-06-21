import React from 'react'
import AccordionMenu from './AccordionMenu'
import FilterMenu from './FilterMenu'
import JobSortBy from './JobSortBy'
import Footer from './Footer'
import { Grid, Segment, Container } from 'semantic-ui-react'
import { Route } from 'react-router'
import JobPostingFormList from '../pages/JobPostingFormList'
import JobPostingFormDetail from '../pages/JobPostingFormDetail'
import EmployerList from '../pages/EmployerList'
import JobPositionList from '../pages/JobPositionList'
import JobSeekerList from '../pages/JobSeekerList'
import JobPostingFormReleaseDateList from '../pages/JobPostingFormReleaseDateList'
import JobPostingFormEmployerCompanyNameList from '../pages/JobPostingFormEmployerCompanyNameList'
import JobSeekerResumeList from '../pages/JobSeekerResumeList'


export default function Dashboard() {
    return (

        <Container>
            <FilterMenu />
            <JobSortBy />
            <Grid>
                <Grid.Row >
                    <Grid.Column width={3}>
                        <Segment>
                            <AccordionMenu />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Route exact path="/" component={JobPostingFormList} />

                        <Route exact path="/jobpostingform" component={JobPostingFormList} />

                        <Route exact path="/activejobpostings" component={JobPostingFormList} />


                        <Route exact path="/activejobpostingssortedbydate" component={JobPostingFormReleaseDateList} />

                        <Route exact path="/activejobpostingsofafirms/:name" component={JobPostingFormEmployerCompanyNameList} />

                        <Route exact path="/allcvinformationofthecandidate/:id" component={JobSeekerResumeList} />

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