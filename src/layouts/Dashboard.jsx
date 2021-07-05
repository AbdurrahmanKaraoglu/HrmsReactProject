import React from 'react'
import JobSortBy from './JobSortBy'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router'
import FilterSubMenu from './FilterSubMenuLayouts/FilterSubMenu'
import EmployerDashboardPage from '../pages/Employer/EmployerDashboard/EmployerDashboardPage'
import MyJobPostings from '../pages/Employer/EmployerDashboard/MyJobPostings/MyJobPostings'
import MyJobPostingDetail from '../pages/Employer/EmployerDashboard/MyJobPostingDetail/MyJobPostingDetail'
import UpdateMyJobPosting from '../pages/Employer/EmployerDashboard/UpdateMyJobPosting/UpdateMyJobPosting'
import EmployerUpdatePage from '../pages/Employer/EmployerDashboard/EmployerUpdate/EmployerUpdatePage'
import EmployerProfile from '../pages/Employer/EmployerDashboard/EmployerProfilePage/EmployerProfile'
import JobPostingFormAdd from '../pages/Employer/JobPostingForm/JobPostingFormAdd/JobPostingFormAdd'
import Topbar from '../components/topbar/Topbar'
import HomePage from '../pages/HomePage/HomePage'
import JobPostingFormList from '../pages/Employer/JobPostingForm/JobPostingFormList'
import JobPostingFormReleaseDateList from '../pages/Employer/JobPostingForm/JobPostingFormReleaseDate/JobPostingFormReleaseDateList'
import JobPostingFormReleaseDatePage from '../pages/Employer/JobPostingForm/JobPostingFormReleaseDate/JobPostingFormReleaseDatePage'
import JobPostingFormEmployerCompanyNameList from '../pages/Employer/JobPostingForm/JobPostingFormEmployerCompanyName/JobPostingFormEmployerCompanyNameList'
import JobSeekerResumeList from '../pages/Resume/JobSeekerResumeList'
import JobSeekerResumePage from '../pages/Resume/JobSeekerResumePage/JobSeekerResumePage'


import EmployerList from '../pages/Employer/EmployerList'

import JobPositionList from '../pages/Employee/JobPosition/JobPositionList'
import JobSeekerList from '../pages/JobSeeker/JobSeekerList'
import { Switch } from 'react-router-dom'
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
    return (

        <div>
            <ToastContainer position="bottom-right"/>
            <Grid>   
                <Grid.Row > 
                    <Grid.Column width={4}>
                  
                        <FilterSubMenu />
                        {/* <JobSortBy /> */}
                    </Grid.Column>
                   
                    <Grid.Column width={12}>
                  

                        <Route exact path="/" component={HomePage
                        } />

                        <Route path="/dashboard/employer/:id" component={EmployerDashboardPage} />

                        <Route path="/myjobpostings" component={MyJobPostings}/>

                        <Route path="/detail/myjobpostings/:id" component={MyJobPostingDetail}/>

                        <Route path="/update/myjobposting/:id" component={UpdateMyJobPosting}/>

                        <Route path="/update/employer" component={EmployerUpdatePage}/>  

                        <Route path="/profile/employer" component={EmployerProfile}/>

                        <Route path="/jobposting/add" component={JobPostingFormAdd}/>

                        {/* <Route exact path="/topbar" component={Topbar} /> */}

                        <Route  path="/jobpostingform" component={JobPostingFormList} />
                        <Route  path="/jobpostingform/add" component={JobPostingFormAdd} />

                        <Route  path="/activejobpostings" component={JobPostingFormList} />

                        <Route  path="/activejobpostingssortedbydatelist" component={JobPostingFormReleaseDateList} />

                        <Route  path="/activejobpostingssortedbydatepage" component={JobPostingFormReleaseDatePage} />

                        <Route  path="/activejobpostingsofafirms/:name" component={JobPostingFormEmployerCompanyNameList} />

                        <Route path="/allcvinformationofthecandidatelist" component={JobSeekerResumeList} />

                        <Route path="/allcvinformationofthecandidatepage/:id" component={JobSeekerResumePage} />

                        <Route exact path="/employers" component={EmployerList} />

                        <Route exact path="/jobpositions" component={JobPositionList} />
                        <Route exact path="/jobseekers" component={JobSeekerList} />

 {/* <Route exact path="/homepagedetail" component={HomePageDetail} /> */}
                         {/* <Route exact path="/jobpostingform/:id" component={JobPostingFormDetail} />  */}
                      
                        {/* <JobSortBy /> */}


                    </Grid.Column>
                </Grid.Row>
            </Grid> 
        </div>

    );
}