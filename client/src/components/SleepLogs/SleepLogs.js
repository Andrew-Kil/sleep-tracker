import React from "react";
import { NavLink } from "react-router-dom";
import SleepLogsForm from "./SleepLogsForm";
import DisplaySleepLogs from "./DisplaySleepLogs";
import { Button } from "@material-ui/core";

const SleepLogs = (props) => {
  return (
    <>
      <Button>
        <NavLink to="/sleep-logs/public"> View public sleep logs</NavLink>
      </Button>
      <SleepLogsForm userMeta={props.userMeta}></SleepLogsForm>
      <DisplaySleepLogs userMeta={props.userMeta}></DisplaySleepLogs>
    </>
  );
};

export default SleepLogs;
