import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplaySleepLogs = () => {
  const [dreamThemes, setDreamThemes] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/dream-themes");
      setDreamThemes(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Dream Themes</h2>
      {dreamThemes &&
        dreamThemes.data.map((dreamTheme, i) => (
          <div style={{ border: "1px solid black", margin: "10px" }} key={i}>
            <div>theme: {dreamTheme.theme}</div>
            <div>info: {dreamTheme.info}</div>
          </div>
        ))}
    </div>
  );
};

export default DisplaySleepLogs;
