import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi/Navi';
import Footer from './layouts/FooterLayouts/Footer.jsx'
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import FilterSubMenu from './layouts/FilterSubMenuLayouts/FilterSubMenu';
import JobAds from './pages/JobAds';
import SignUp from './components/pages/SignUp/SignUp';
import SignUpJobSeeker from './components/pages/SignUp/SignUpJobSeeker/SignUpJobSeeker';
import SignUpEmployer from './components/pages/SignUp/SignUpEmployer/SignUpEmployer';
import Contact from './components/pages/Contact/Contact';
import SignIn from './components/pages/SignIn/SignIn';
import UserTypes from './components/pages/UserTypes/UserTypes';
import EmployerDashboardPage from './pages/Employer/EmployerDashboard/EmployerDashboardPage';
import EmployerUpdatePage from './pages/Employer/EmployerDashboard/EmployerUpdate/EmployerUpdatePage';
import EmployerProfile from './pages/Employer/EmployerDashboard/EmployerProfilePage/EmployerProfile';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
      
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/usertypes' component={UserTypes} />
            <Route path='/contact' component={Contact} />
            <Route path='/jobsearch' component={FilterSubMenu} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/sign-up-jobseeker' component={SignUpJobSeeker} />
            <Route path='/sign-up-employer' component={SignUpEmployer} />
            <Route path='/dashboard/employer' component={EmployerDashboardPage} />
            <Route path='dashboard/employer/update/1' component={EmployerUpdatePage} />

           
           

    
        </Switch>


        <br />
        <Footer />
      </Router>
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

