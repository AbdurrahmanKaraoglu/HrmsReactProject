import React from 'react'
import FeaturedInfo from '../../../components/featuredInfo/FeaturedInfo'
import "./employerDashboardPage.css"
import Chart from '../../../components/chart/Chart'
import { userData } from '../../../components/chart/dummyData';
import WidgetSm from '../../../components/widgetSm/WidgetSm';
import WidgetLg from '../../../components/widgetLg/WidgetLg';
import Sidebar from '../../../components/sidebar/Sidebar'
import { ToastContainer } from "react-toastify";
import { Container, Grid } from "semantic-ui-react";

export default function EmployerDashboardPage() {
  return (

    <div>
      <Sidebar/>
    </div>



    // <div>

    //   <div className="dashboardpage2">
    //    <Sidebar/>
    //   </div>

    //    <div className="dashboardpage">
    //    <FeaturedInfo/>
    //      <Chart data={userData} title="İlanların Analitiği" grid dataKey="Active User"/>
    //      <div className="dashboardpageWidgets">
    //          <WidgetSm/>
    //          <WidgetLg/>
    //      </div>
    //    </div>
    // </div>
  )
}