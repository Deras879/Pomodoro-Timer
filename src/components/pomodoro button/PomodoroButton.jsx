import React, { useState } from "react";
import "./PomodoroButton.css";

const PomodoroButton = ({ label, status, onClick }) => {
  // const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={`pomodoro-button${status ? "-active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PomodoroButton;
