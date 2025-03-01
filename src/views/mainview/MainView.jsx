import React from "react";
import "./MainView.css";
import { useState } from "react";
import PomodoroButton from "../../components/pomodoro button/PomodoroButton";

const MainView = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (id) => {
    setActiveButton(id);
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
