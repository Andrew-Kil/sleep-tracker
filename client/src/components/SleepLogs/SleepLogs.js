import React from "react";

import Form from "./Form/Form";
import DisplaySleepLogs from "./DisplaySleepLogs";

const SleepLogs = (props) => (
  <>
    <Form userMeta={props.userMeta}></Form>
    <DisplaySleepLogs></DisplaySleepLogs>
  </>
);

export default SleepLogs;
