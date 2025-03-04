import React from "react";
import "./MainView.css";
import useTimerStore from "../../zustand/TimerStore";
import useColorStore from "../../zustand/ColorStore";
import { useState, useEffect } from "react";
import Settings from "../../components/settingscomponent/Settings";
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

  const { backgroundClass, setBackgroundClass } = useColorStore();

  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    setActiveButton(1);
  }, []);

  useEffect(() => {
    // Cambiar la clase de #root al valor actual de backgroundClass
    const rootElement = document.getElementById("root");
    rootElement.className = backgroundClass; // Actualiza la clase
  }, [backgroundClass]);

  const handleButtonClick = (id) => {
    setActiveButton(id);
    if (id === 1) {
      setActiveTimer("pomoTime");
      setBackgroundClass("red");
    }
    if (id === 2) {
      setActiveTimer("breakTime");
      setBackgroundClass("blue");
    }
    if (id === 3) {
      setActiveTimer("longBreakTime");
      setBackgroundClass("green");
    }
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

  useEffect(() => {
    const startButton = document.getElementById("start-button");
    if (isRunning == false) startButton.className = "start-button";
    else {
      startButton.className = "start-button-active";
    }
  }, [isRunning]);
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
          <button
            id="start-button"
            className="start-button"
            onClick={handleStart}
          >
            {isRunning ? "PAUSE" : "START"}
          </button>
          <div className="extra-buttons">
            <button>restart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainView;
