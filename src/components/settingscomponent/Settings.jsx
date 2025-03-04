import React from "react";
import { useState, useEffect } from "react";
import useTimerStore from "../../zustand/TimerStore";
import "./Settings.css";

const Settings = () => {
  const {
    setPomoTime,
    setBreakTime,
    setLongBreakTime,
    pomoTimeCopy,
    breakTimeCopy,
    longBreakTimeCopy,
  } = useTimerStore();

  const handleChange = (e) => {
    const id = e.target.id;

    switch (id) {
      case "pomodoro":
        setPomoTime(e.target.value);
        break;
      case "break":
        setBreakTime(e.target.value);
        break;
      case "longBreak":
        setLongBreakTime(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <div className="title">
        <h2>Settings</h2>
      </div>
      <div className="subtitle">
        <h3>Time(minutes)</h3>
      </div>
      <form action="">
        <div className="inputs-div">
          <div>
            <label htmlFor="">Pomodoro</label>
            <input
              className="input"
              onChange={handleChange}
              id="pomodoro"
              type="number"
              step="1"
              min="0"
              value={pomoTimeCopy / 60}
            />
          </div>
          <div>
            <label htmlFor="">Short Break</label>
            <input
              className="input"
              onChange={handleChange}
              type="number"
              id="break"
              step="1"
              min="0"
              value={breakTimeCopy / 60}
            />
          </div>
          <div>
            <label htmlFor="">Long Break</label>
            <input
              className="input"
              onChange={handleChange}
              type="number"
              id="longBreak"
              step="1"
              min="0"
              value={longBreakTimeCopy / 60}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
