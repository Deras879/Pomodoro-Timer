import React from "react";
import "./MainView.css";
import useTimerStore from "../../zustand/TimerStore";
import useColorStore from "../../zustand/ColorStore";
import { useState, useEffect } from "react";
import iconRestart from "../../assets/iconRestart.svg";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import PomodoroButton from "../../components/pomodoro button/PomodoroButton";
import SwitchOn from "../../assets/Sounds/Switch on.mp3";
import SwitchOff from "../../assets/Sounds/Switch off.mp3";

const MainView = () => {
  const {
    pomoTime,
    pomoTimeCopy,
    breakTime,
    breakTimeCopy,
    longBreakTimeCopy,
    longBreakTime,
    setPomoTime,
    setBreakTime,
    setLongBreakTime,
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
    if (isRunning) {
      setIsRunning(false);

      setTimeout(() => {
        continueExecution(id);
      }, 300);
    } else {
      continueExecution(id);
    }
  };

  const continueExecution = (id) => {
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
    const restartButton = document.getElementById("restart-button");
    if (isRunning == false) {
      startButton.className = "start-button";
      restartButton.className = "extra-buttons";
    } else {
      startButton.className = "start-button-active";
      restartButton.className = "extra-buttons-active";
    }
  }, [isRunning]);
  const handleStart = () => {
    if (isRunning) {
      playSound(SwitchOff);
    } else {
      playSound(SwitchOn);
    }
    setIsRunning(!isRunning);
  };
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const getMaxTime = () => {
    switch (activeTimer) {
      case "pomoTime":
        return pomoTimeCopy;
      case "breakTime":
        return breakTimeCopy;
      case "longBreakTime":
        return longBreakTimeCopy;
      default:
        return 0;
    }
  };

  const getCurrentColor = () => {
    switch (backgroundClass) {
      case "red":
        return "#ff6b6b";
      case "blue":
        return "#4dabf7";
      case "green":
        return "#69db7c";
      default:
        return "#4dabf7";
    }
  };
  const getCurrentTime = () => {
    if (activeTimer === "pomoTime") return pomoTime;
    if (activeTimer === "breakTime") return breakTime;
    if (activeTimer === "longBreakTime") return longBreakTime;
    return 0;
  };

  const handleRestart = () => {
    switch (activeTimer) {
      case "pomoTime":
        setPomoTime(pomoTimeCopy / 60);
        break;
      case "breakTime":
        setBreakTime(breakTimeCopy / 60);
        break;
      case "longBreakTime":
        setLongBreakTime(longBreakTimeCopy / 60);
        break;

      default:
        break;
    }
  };

  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play().catch((error) => {
      console.error("Error al reproducir el sonido:", error);
    });
  };

  return (
    <div>
      <ProgressBar
        currentTime={getCurrentTime()}
        maxTime={getMaxTime()}
        color={getCurrentColor()}
      ></ProgressBar>
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
          <div id="restart-button" className="extra-buttons">
            <button className="restart" onClick={handleRestart}>
              <img src={iconRestart} className="iconRestart" alt="" />
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainView;
