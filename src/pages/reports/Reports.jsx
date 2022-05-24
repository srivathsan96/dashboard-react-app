import React from "react";

import classes from "./Reports.module.css";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ListContainer from "../../components/listContainer/ListContainer";
import Charts from "../../components/charts/Charts";
import ReportStatusSection from "../../components/reportStatusSection/ReportStatusSection";

// Report Section

const Reports = () => {

  const navbarTitle = "Reports";

  return (
    <div className={classes.reports}>
      <Sidebar />
      <div className={classes.reportsContainer}>
        <Navbar navbarTitle={navbarTitle} />
        <div className={classes.listContainer}>
          <ListContainer page={navbarTitle}>
            <ReportStatusSection />
            <Charts />
          </ListContainer>
        </div>
      </div>
    </div>
  );
};

export default Reports;
