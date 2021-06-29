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
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EmployerUpdatePage from './pages/Employer/EmployerUpdate/EmployerUpdatePage';
import MyJobPostings from './pages/Employer/EmployerDashboard/MyJobPostings/MyJobPostings';
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
          <Route path="/myJobPostings">
            <MyJobPostings />
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