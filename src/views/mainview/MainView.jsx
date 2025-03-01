import React from "react";
import "./MainView.css";
import useTimerStore from "../../zustand/TimerStore";
import { useState, useEffect } from "react";
import PomodoroButton from "../../components/pomodoro button/PomodoroButton";

const MainView = () => {
  const {
    pomoTime,
    breakTime,
    longBreakTime,
    activeTimer,
    isRunning,
    setIsRunning,
    decrementTime,
    setActiveTimer,
  } = useTimerStore();

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (id) => {
    setActiveButton(id);
    if (id === 1) setActiveTimer("pomoTime");
    if (id === 2) setActiveTimer("breakTime");
    if (id === 3) setActiveTimer("longBreakTime");
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        decrementTime();
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, decrementTime]);

  const handleStart = () => {
    setIsRunning(!isRunning);
  };
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const getCurrentTime = () => {
    if (activeTimer === "pomoTime") return pomoTime;
    if (activeTimer === "breakTime") return breakTime;
    if (activeTimer === "longBreakTime") return longBreakTime;
    return 0;
  };

  return (
    <div>
      <div className="Major-container">
        <div className="Buttons">
          <PomodoroButton
            status={activeButton === 1}
            label="Pomodoro"
            onClick={() => handleButtonClick(1)}
          />
          <PomodoroButton
            status={activeButton === 2}
            label="Short Break"
            onClick={() => handleButtonClick(2)}
          />
          <PomodoroButton
            status={activeButton === 3}
            label="Long Break"
            onClick={() => handleButtonClick(3)}
          />
        </div>
        <div className="Timer">{formatTime(getCurrentTime())}</div>

        <div className="Timer-buttons">
          <button className="start-button" onClick={handleStart}>
            {isRunning ? "PAUSE" : "START"}
          </button>
          <div className="extra-buttons">
            <button>next</button>
            <button>restart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainView;
