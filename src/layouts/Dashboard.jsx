import React from 'react'
import JobSortBy from './JobSortBy'
import Footer from './FooterLayouts/Footer'
import { Grid, Container } from 'semantic-ui-react'
import { Route } from 'react-router'
import JobPostingFormList from '../pages/JobPostingForm/JobPostingFormList'
import EmployerList from '../pages/Employer/EmployerList'
import JobPositionList from '../pages/JobPosition/JobPositionList'
import JobSeekerList from '../pages/JobSeeker/JobSeekerList'
import JobPostingFormReleaseDateList from '../pages/JobPostingForm/JobPostingFormReleaseDate/JobPostingFormReleaseDateList'
import JobPostingFormEmployerCompanyNameList from '../pages/JobPostingForm/JobPostingFormEmployerCompanyName/JobPostingFormEmployerCompanyNameList'
import JobSeekerResumeList from '../pages/Resume/JobSeekerResumeList'
import JobSeekerResumePage from '../pages/Resume/JobSeekerResumePage/JobSeekerResumePage'
import HomePage from '../pages/HomePage/HomePage'
import FilterSubMenu from './FilterSubMenuLayouts/FilterSubMenu'
import JobPostingFormReleaseDatePage from '../pages/JobPostingForm/JobPostingFormReleaseDate/JobPostingFormReleaseDatePage'
import HomePageDetail from '../pages/HomePage/HomePageDetail'
import JobPostingFormAdd from '../pages/JobPostingForm/JobPostingFormAdd/JobPostingFormAdd'
import Topbar from '../components/topbar/Topbar'


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

                    <Route exact path="/topbar" component={Topbar} />

                        <Route exact path="/" component={HomePage} />

                        <Route exact path="/homepagedetail" component={HomePageDetail} />

                        <Route exact path="/jobpostingform" component={JobPostingFormList} />

                        {/* <Route exact path="/jobpostingform/:id" component={JobPostingFormDetail} /> */}

                        <Route exact path="/jobpostingform/add" component={JobPostingFormAdd} />
                        


                        <Route exact path="/activejobpostings" component={JobPostingFormList} />


                        <Route exact path="/activejobpostingssortedbydatelist" component={JobPostingFormReleaseDateList} />

                        <Route exact path="/activejobpostingssortedbydatepage" component={JobPostingFormReleaseDatePage} />

                        

                        <Route exact path="/activejobpostingsofafirms/:name" component={JobPostingFormEmployerCompanyNameList} />

                        <Route path="/allcvinformationofthecandidatelist" component={JobSeekerResumeList} />

                        <Route path="/allcvinformationofthecandidatepage/:id" component={JobSeekerResumePage} />

                        
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