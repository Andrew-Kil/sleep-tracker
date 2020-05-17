import React from "react";
import { NavLink } from "react-router-dom";
import DisplaySleepLogs from "./DisplaySleepLogs";
import { Button } from "@material-ui/core";

const SleepLogs = () => {
  return (
    <>
      <div>
        <Button variant="contained" color="primary">
          <NavLink
            to="/sleep-logs/form"
            style={{
              textDecoration: "none",
              color: "white",
              textTransform: "capitalize",
            }}>
            Add Sleep Log
          </NavLink>
        </Button>
      </div>
      <div style={{ margin: "20px" }}>
        <Button variant="contained" color="secondary">
          <NavLink
            to="/sleep-logs/public"
            style={{
              textDecoration: "none",
              color: "white",
              textTransform: "capitalize",
            }}>
            View public sleep logs
          </NavLink>
        </Button>
      </div>
      <DisplaySleepLogs></DisplaySleepLogs>
    </>
  );
};

export default SleepLogs;
