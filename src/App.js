import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi/Navi';
import Footer from './layouts/FooterLayouts/Footer.jsx'
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';





function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Topbar /> */}
      <Container className="main">
        <HomePage/>
        {/* <Sidebar /> */}
        {/* <Dashboard /> */}
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

