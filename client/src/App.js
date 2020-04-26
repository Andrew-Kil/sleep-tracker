import React from "react";
import AddSleepLogForm from "./components/AddSleepLogForm";
import DisplaySleepLogs from "./components/DisplaySleepLogs";
import DisplayDreamThemes from "./components/DisplayDreamThemes";
import "./App.css";

const App = () => (
  <div className="App">
    <h1>Sleep Tracker</h1>
    <AddSleepLogForm></AddSleepLogForm>
    <DisplaySleepLogs></DisplaySleepLogs>
    <DisplayDreamThemes></DisplayDreamThemes>
  </div>
);

export default App;
