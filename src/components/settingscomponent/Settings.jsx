import React from "react";
import { useState, useEffect } from "react";
import useTimerStore from "../../zustand/TimerStore";

const Settings = () => {
  const {
    setPomoTime,
    setBreakTime,
    setLongBreakTime,
    pomoTime,
    breakTime,
    longBreakTime,
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
      <div>
        <h2>Settings</h2>
      </div>

      <div>
        <h3>Timer</h3>
      </div>
      <div>
        <h3>Time(minutes)</h3>
      </div>
      <form action="">
        <div>
          <div>
            <label htmlFor="">Pomodoro</label>
            <input
              onChange={handleChange}
              id="pomodoro"
              type="number"
              step="1"
              min="0"
              value={pomoTime / 60}
            />
          </div>
          <div>
            <label htmlFor="">Short Break</label>
            <input
              onChange={handleChange}
              type="number"
              id="break"
              step="1"
              min="0"
              value={breakTime / 60}
            />
          </div>
          <div>
            <label htmlFor="">Long Break</label>
            <input
              onChange={handleChange}
              type="number"
              id="longBreak"
              step="1"
              min="0"
              value={longBreakTime / 60}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
