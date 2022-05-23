import React from "react";

import classes from "./ProjectItem.module.css";

import artworkDesign from "../../resources/images/artworkDesign.png";

import DrawerSection from "../drawer/DrawerSection";


// Dummy Data

const requestNumberTitle = "Request Number";
const initiatedByTitle = "Initiated By";
const initiatedDateTitle = "Initiated Date";
const productTitle = "Product";
const componentTypeTitle = "Component Type";
const statusTitle = "Status";

// Project Item

const ProjectItem = (props) => {

  let project = props.project;

  let navbarTitle = props.navbarTitle;

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <img src={artworkDesign} alt="ArtworkDesign" />
      </div>
      <div className={`${classes.item} ${classes.itemCenter}`}>
        <div className={classes.item}>
          <div className={classes.title}>{requestNumberTitle}</div>
          <div className={classes.title}>{initiatedByTitle}</div>
          <div className={classes.title}>{initiatedDateTitle}</div>
          <div className={classes.title}>{productTitle}</div>
          <div className={classes.title}>{componentTypeTitle}</div>
        </div>
        <div className={classes.item}>
          <div className={classes.value}>{project.requestNumber}</div>
          <div className={classes.value}>{project.initiatedBy}</div>
          <div className={classes.value}>{project.initiatedDate}</div>
          <div className={classes.value}>{project.product}</div>
          <div className={classes.value}>{project.componentType}</div>
        </div>
        <hr />
        <div className={`${classes.item} ${classes.status}`}>
          <div className={`${classes.statusInfo} ${classes.timeStatus}`}>
            <span className={classes.statusTitle}>{statusTitle}: </span>
            <span className={classes.timeStatus}>{project.status}</span>
          </div>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.menuIcon}>
          <DrawerSection project={project} navbarTitle={navbarTitle} />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;