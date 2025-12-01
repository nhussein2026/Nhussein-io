// src/components/HeatmapFromGitHub.js
import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

function HeatmapFromGitHub({ username }) {
  const [values, setValues] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}`
        );
        const data = await res.json();
        setValues(data.contributions);
      } catch (err) {
        console.error("Failed to fetch contributions:", err);
      }
    }
    fetchData();
  }, [username]);

  if (!values.length) {
    return <div>Loading...</div>;
  }

  const maxCount = Math.max(...values.map((v) => v.count));
  const classForValue = (value) => {
    if (!value || value.count === 0) return "color-empty";
    const ratio = value.count / maxCount;
    if (ratio > 0.75) return "color-scale-4";
    if (ratio > 0.5) return "color-scale-3";
    if (ratio > 0.25) return "color-scale-2";
    return "color-scale-1";
  };

  return (
    <CalendarHeatmap
      startDate={
        new Date(
          new Date().getFullYear() - 1,
          new Date().getMonth(),
          new Date().getDate()
        )
      }
      endDate={new Date()}
      values={values}
      classForValue={classForValue}
      showWeekdayLabels={true}
      tooltipDataAttrs={(value) => ({
        "data-tip": value
          ? `${value.date}: ${value.count}`
          : "No contributions",
      })}
    />
  );
}

export default HeatmapFromGitHub;
