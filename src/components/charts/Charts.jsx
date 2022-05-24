import React from "react";

import PieChart from "../pieChart/PieChart";

import classes from "./Charts.module.css";

// Dummy Data

const fileTypesReportTitle = "File Types Report";
const allWorkflowsInitiatedReportTitle = "All Workflows Initiated Report";

const fileTypesKeys = [
  "7589",
  "Artwork",
  "Brief",
  "Image",
  "Others",
  "Source File",
];
const allWorkflowsInitiatedKeys = [
  "Project Initiation Process",
  "Artwork Approval Process",
];

const colorPalette1 = [
  "#96003a",
  "#ff7347",
  "#ffbc7b",
  "#ffbc7b",
  "#671f20",
  "#5c7458",
];
const colorPalette2 = ["#444546", "#ffbb6e"];

// Charts

const Charts = () => {
  return (
    <div className={classes.charts}>
      <div className={classes.box1}>
        <div className={classes.top}>{fileTypesReportTitle}</div>
        <div className={classes.center}>
          <PieChart type={fileTypesReportTitle} colorPalette={colorPalette1} />
        </div>
        <div className={classes.bottom}>
          <ul>
            {fileTypesKeys.map((key, i) => {
              return (
                <li key={Math.random()}>
                  <div className={classes.key}>
                    <span style={{ backgroundColor: colorPalette1[i] }}> </span>
                    {fileTypesKeys[i]}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={classes.box2}>
        <div className={classes.top}>{allWorkflowsInitiatedReportTitle}</div>
        <div className={classes.center}>
          <PieChart
            type={allWorkflowsInitiatedReportTitle}
            colorPalette={colorPalette2}
          />
        </div>
        <div className={classes.bottom}>
          {" "}
          <ul>
            {allWorkflowsInitiatedKeys.map((key, i) => {
              return (
                <li key={Math.random()}>
                  <div className={classes.key}>
                    <span style={{ backgroundColor: colorPalette2[i] }}> </span>
                    {allWorkflowsInitiatedKeys[i]}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Charts;
