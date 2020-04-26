import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplaySleepLogs = () => {
  const [sleepLogs, setSleepLogs] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/sleep-logs");
      setSleepLogs(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Sleep Logs</h2>
      {sleepLogs &&
        sleepLogs.data.map((sleepLog, i) => (
          <div style={{ border: "1px solid black", margin: "10px" }} key={i}>
            <div style={{ marginTop: "20px" }}>user id: {sleepLog.user_id}</div>
            <div style={{ marginTop: "20px" }}>date: {sleepLog.date}</div>
            <div style={{ marginTop: "20px" }}>
              remember dream: {sleepLog.remember_dream}
            </div>
            <div style={{ marginTop: "20px" }}>
              interrupted sleep: {sleepLog.interrupted_sleep}
            </div>
            <div style={{ marginTop: "20px" }}>
              sleep start: {sleepLog.sleep_start}
            </div>
            <div style={{ marginTop: "20px" }}>
              sleep end:{sleepLog.sleep_end}
            </div>
            <div style={{ marginTop: "20px" }}>notes: {sleepLog.notes}</div>
          </div>
        ))}
    </div>
  );
};

export default DisplaySleepLogs;
