import React from 'react'
import AccordionMenu from './AccordionMenu'
import FilterMenu from './FilterMenu'
import JobSortBy from './JobSortBy'
import Footer from './Footer'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import JobPostingFormList from '../pages/JobPostingFormList'
import JobPostingFormDetail from '../pages/JobPostingFormDetail'

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
                        <Route path="/jobpostingform/:id" component={JobPostingFormDetail} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>



            <Footer />
        </div>
    )
}

// 2:09:01