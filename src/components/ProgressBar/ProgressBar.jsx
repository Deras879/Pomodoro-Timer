import React from "react";
import "./Progressbar.css";

const ProgressBar = ({ currentTime, maxTime, color }) => {
  const calculateProgress = () => {
    if (maxTime <= 0) return 0;
    const progress = ((maxTime - currentTime) / maxTime) * 100;
    return Math.min(100, Math.max(0, progress)); // Asegurar valores entre 0-100
  };

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{
          width: `${calculateProgress()}%`,
          backgroundColor: "white",
        }}
      />
    </div>
  );
};

export default ProgressBar;
