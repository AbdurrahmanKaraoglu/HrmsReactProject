import React from 'react'
import AccordionMenu from './AccordionMenu'
import JobPostingFormService from '../pages/JobPostingFormList'
import FilterMenu from './FilterMenu'
import JobSortBy from './JobSortBy'
import Footer from './Footer'
import { Grid } from 'semantic-ui-react'

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
                        <JobPostingFormService />
                    </Grid.Column>
                </Grid.Row>
            </Grid>



            <Footer />
        </div>
    )
}
