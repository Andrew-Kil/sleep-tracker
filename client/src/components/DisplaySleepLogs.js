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
      {sleepLogs &&
        sleepLogs.data.map((sleepLog) => (
          <div style={{ marginTop: "20px" }}>{sleepLog.notes}</div>
        ))}
    </div>
  );
};

export default DisplaySleepLogs;
