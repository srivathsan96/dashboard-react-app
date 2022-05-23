import React from "react";

import classes from "./ListContainer.module.css";

// List Container

const ListContainer = (props) => {

  // Setting container height based on the page.

  let heightValue;

  if (props.page === "Dashboard") {
    heightValue = "73vh";
  } else if (props.page === "All Projects" || props.page === "Start New Project") {
    heightValue = "89vh";
  } else if (props.page === "Search") {
    heightValue = "85vh";
  } else if (props.page === "Reports") {
    heightValue = "80vh";
  }

  return (
    <div className={classes.listContainer} style={{ height: heightValue }}>
      {props.children}
    </div>
  );
};

export default ListContainer;