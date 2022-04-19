import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

const useStyles = makeStyles({
  container: {
    position: "relative",
    display: "inline-block"
  },
  right: {
    position: "absolute",
    minWidth: "200px",
    zIndex: "10",
    top: "50%",
    left: "calc(100% + 5px)",
    transform: "translateY(-50%)",
    backgroundColor: "gray",
    color: "white",
    padding: "0.5em 1em",
    borderRadius: "5px"
  }
});

export const Tooltip = ({ children, content }) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  return (
    <div className={classes.container}>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
      {show && <div className={classes.right}>{content}</div>}
    </div>
  );
};
