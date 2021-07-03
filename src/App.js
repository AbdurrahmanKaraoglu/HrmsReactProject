import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';

import Navi from './layouts/Navi/Navi';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './layouts/FooterLayouts/Footer.jsx'
import EmployerDashboardPage from './pages/Employer/EmployerDashboard/EmployerDashboardPage';
import { Switch, Route } from "react-router-dom";
import EmployerUpdatePage from './pages/Employer/EmployerDashboard/EmployerUpdate/EmployerUpdatePage';
import MyJobPostings from './pages/Employer/EmployerDashboard/MyJobPostings/MyJobPostings';
import UpdateMyJobPosting from './pages/Employer/EmployerDashboard/UpdateMyJobPosting/UpdateMyJobPosting';
import EmployerProfile from './pages/Employer/EmployerDashboard/EmployerProfilePage/EmployerProfile';
import JobPostingFormAdd from './pages/Employer/JobPostingForm/JobPostingFormAdd/JobPostingFormAdd';
import MyJobPostingDetail from './pages/Employer/EmployerDashboard/MyJobPostingDetail/MyJobPostingDetail';
import HomePage from './pages/HomePage/HomePage.jsx';

import JobPostingFormList from './pages/Employer/JobPostingForm/JobPostingFormList'

import EmployerList from './pages/Employer/EmployerList'

import JobPositionList from './pages/Employee/JobPosition/JobPositionList'
import JobSeekerList from './pages/JobSeeker/JobSeekerList'

import JobPostingFormReleaseDateList from './pages/Employer/JobPostingForm/JobPostingFormReleaseDate/JobPostingFormReleaseDateList'

import JobPostingFormEmployerCompanyNameList from './pages/Employer/JobPostingForm/JobPostingFormEmployerCompanyName/JobPostingFormEmployerCompanyNameList.jsx'

import JobSeekerResumeList from './pages/Resume/JobSeekerResumeList'

import JobSeekerResumePage from './pages/Resume/JobSeekerResumePage/JobSeekerResumePage'

import JobPostingFormReleaseDatePage from './pages/Employer/JobPostingForm/JobPostingFormReleaseDate/JobPostingFormReleaseDatePage'

import HomePageDetail from './pages/HomePage/HomePageDetail'


function App() {
  return (
    <div className="App">
      <Navi />
      {/* <Topbar /> */}
      <Container>
        {/* <Sidebar /> */}
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>

          <Route path="/dashboard/employer/:id">
            <EmployerDashboardPage />
          </Route>

          <Route path="/myjobpostings">
            <MyJobPostings />
          </Route>
          <Route path="/detail/myjobpostings/:id">
            <MyJobPostingDetail />
          </Route>
          <Route path="/update/myjobposting/:id">
            <UpdateMyJobPosting />
          </Route>
          <Route path="/update/employer">
            <EmployerUpdatePage />
          </Route>
          <Route path="/profile/employer">
            <EmployerProfile />
          </Route>
          <Route path="/jobposting/add">
            <JobPostingFormAdd />
          </Route>
          <Route exact path="/topbar" component={Topbar} />

          <Route exact path="/" component={HomePage} />

          {/* <Route exact path="/homepagedetail" component={HomePageDetail} /> */}

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
        </Switch>
      </Container>
      <br />
      <Footer />
    </div>
  );
}

export default App;

    // <div className="App">

    //    <Navi/>
    //   <Container className="main">
    //     <Dashboard />
    //   </Container> 
    // </div>

