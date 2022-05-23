import React from "react";

import classes from "./ReportStatusSection.module.css";

import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

// Dummy Data

const filesInLibraryTitle = "Files In Library";
const filesInLibraryTotalCount = 412;
const firstTimeRightTitle = "First Time Right";
const firstTimeRightTotalCount = 25;

// Report Status Section (Top)

const ReportStatusSection = () => {
  return (
    <div className={classes.statusInfo}>
      <div className={classes.box1}>
        <div>
          <FolderOpenOutlinedIcon
            sx={{ fontSize: 50 }}
            className={classes.icon}
          />
        </div>
        <div className={classes.item}>
          <div className={classes.title}>{filesInLibraryTitle}</div>
          <div className={classes.totalCount}>{filesInLibraryTotalCount}</div>
        </div>
      </div>
      <div className={classes.box2}>
        <div>
          <CheckBoxOutlinedIcon
            sx={{ fontSize: 50 }}
            className={classes.icon}
          />
        </div>
        <div className={classes.item}>
          <div className={classes.title}>{firstTimeRightTitle}</div>
          <div className={classes.totalCount}>{firstTimeRightTotalCount}</div>
        </div>
      </div>
    </div>
  );
};

export default ReportStatusSection;
