import React from "react";

import SleepLogsForm from "./SleepLogsForm";
import DisplaySleepLogs from "./DisplaySleepLogs";

const SleepLogs = (props) => (
  <>
    <SleepLogsForm userMeta={props.userMeta}></SleepLogsForm>
    <DisplaySleepLogs userMeta={props.userMeta}></DisplaySleepLogs>
  </>
);

export default SleepLogs;
