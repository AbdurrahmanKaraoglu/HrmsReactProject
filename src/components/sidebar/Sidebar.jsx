import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './sidebar.css';
import { IconContext } from 'react-icons';
import { Container } from 'semantic-ui-react';
import EmployerProfile from '../../pages/Employer/EmployerDashboard/EmployerProfilePage/EmployerProfile';
import EmployerUpdatePage from '../../pages/Employer/EmployerDashboard/EmployerUpdate/EmployerUpdatePage';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>

      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='sidebar'>
          <Link to='#' className='sidebarmenu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h1 className='sidebarh1'>Dashboard</h1>
        </div>
        <nav className={sidebar ? 'sidebarnav-menu active' : 'sidebarnav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='sidebar-toggle'>
              <Link to='#' className='sidebarmenu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                  
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <EmployerUpdatePage/>

    </div>
  );
}

export default Sidebar;