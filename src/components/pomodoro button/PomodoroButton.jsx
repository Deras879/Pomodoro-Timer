import React, { useState } from "react";
import "./PomodoroButton.css";

const PomodoroButton = ({ label }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`pomodoro-button${isActive ? "-active" : ""}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default PomodoroButton;
