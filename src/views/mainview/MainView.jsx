import React from "react";
import "./MainView.css";
import { useState } from "react";
import PomodoroButton from "../../components/pomodoro button/PomodoroButton";

const MainView = () => {
  return (
    <div>
      <div className="Major-container">
        <div className="Buttons">
          <PomodoroButton label="Pomodoro" />
          <PomodoroButton label="Short Break" />
          <PomodoroButton label="Long Break" />
        </div>
        <div className="Timer">25:00</div>

        <div className="Timer-buttons">
          <button className="start-button">START</button>
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
