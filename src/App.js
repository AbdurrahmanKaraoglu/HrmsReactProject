import './App.css';
// import Dashboard from './layouts/Dashboard';
// import 'semantic-ui-css/semantic.min.css'
// import { Container } from 'semantic-ui-react';
// import Navi from './layouts/Navi';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './layouts/FooterLayouts/Footer.jsx'
import EmployerDashboardPage from './pages/Employer/EmployerDashboard/EmployerDashboardPage';
import {
  Switch,
  Route
} from "react-router-dom";
import EmployerUpdatePage from './pages/Employer/EmployerDashboard/EmployerUpdate/EmployerUpdatePage';
import MyJobPostings from './pages/Employer/EmployerDashboard/MyJobPostings/MyJobPostings';
import UpdateMyJobPosting from './pages/Employer/EmployerDashboard/UpdateMyJobPosting/UpdateMyJobPosting';
import EmployerProfile from './pages/Employer/EmployerDashboard/EmployerProfilePage/EmployerProfile';
import JobPostingFormAdd from './pages/Employer/JobPostingForm/JobPostingFormAdd/JobPostingFormAdd';
function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <EmployerDashboardPage />
          </Route>
          <Route path="/myjobpostings">
            <MyJobPostings />
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
        </Switch>
      </div>
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