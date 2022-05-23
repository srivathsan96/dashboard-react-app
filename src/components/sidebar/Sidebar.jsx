import React from "react";
import { Link } from "react-router-dom";

import classes from "./Sidebar.module.css";

import { projectsListArray } from "../../pages/projects/projectsArray";

// Icons from Material UI

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ScreenSearchDesktopOutlinedIcon from "@mui/icons-material/ScreenSearchDesktopOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";

// Snackbar from Material UI

import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// Dummy Data

const brandLogo = "BrandArtworks";
const dashboard = "Dashboard";
const startANewProject = "Start a new Project";
const workflows = "Workflows";
const inbox = "Inbox";
const inboxCount = Math.floor(Math.random() * 6);
const myProjects = "My Projects";
const myProjectsCount = 16;
const allProjects = "All Projects";
const allProjectsCount = projectsListArray.length;
const assetLibrary = "Asset Library";
const search = "Search";
const browse = "Browse";
const reports = "Reports";
const report = "Report";

// Sidebar Navigation

const Sidebar = () => {

  // Snackbar State
  const [open, setOpen] = React.useState(false);

  // Open Snackbar
  const handleClick = () => {
    setOpen(true);
  };

  // Close Snackbar
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // Snackbar Action
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div className={classes.sidebar}>
      <div className={classes.top}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className={classes.logo}>{brandLogo}</span>
        </Link>
      </div>
      <div className={classes.center}>
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <HomeOutlinedIcon className={classes.icon} />
              <span>{dashboard}</span>
            </li>
          </Link>
          <Link to="/newProject" style={{ textDecoration: "none" }}>
            <li>
              <CheckCircleOutlineOutlinedIcon className={classes.icon} />
              <span>{startANewProject}</span>
            </li>
          </Link>
          <p className={classes.title}>{workflows}</p>
          <li onClick={handleClick}>
            <MailOutlinedIcon className={classes.icon} />
            <span>
              {inbox} ({inboxCount})
            </span>
          </li>
          <li onClick={handleClick}>
            <FolderSharedOutlinedIcon className={classes.icon} />
            <span>
              {myProjects} ({myProjectsCount})
            </span>
          </li>
          <Link to="/allProjects" style={{ textDecoration: "none" }}>
            <li>
              <FolderOutlinedIcon className={classes.icon} />
              <span>
                {allProjects} ({allProjectsCount})
              </span>
            </li>
          </Link>
          <p className={classes.title}>{assetLibrary}</p>
          <Link to="/search" style={{ textDecoration: "none" }}>
            <li>
              <SearchOutlinedIcon className={classes.icon} />
              <span>{search}</span>
            </li>
          </Link>
          <li onClick={handleClick}>
            <ScreenSearchDesktopOutlinedIcon className={classes.icon} />
            <span>{browse}</span>
          </li>
          <p className={classes.title}>{reports}</p>
          <Link to="/reports" style={{ textDecoration: "none" }}>
            <li>
              <PieChartOutlineOutlinedIcon className={classes.icon} />
              <span>{report}</span>
            </li>
          </Link>
        </ul>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="This page is not available!"
        action={action}
      />
    </div>
  );
};

export default Sidebar;
