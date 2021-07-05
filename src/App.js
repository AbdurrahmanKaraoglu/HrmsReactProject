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





function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Container className="main">

          <Route path='/' exact component={Home}/>
          <Route path='/services' component={Services}/>
            {/* <Topbar /> */}

            {/* <Route path='/' exact component={HomePage} /> */}
            {/* <Sidebar /> */}
            {/* <Dashboard /> */}
          </Container>
        </Switch>
        {/* <br /> */}
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

