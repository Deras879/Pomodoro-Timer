import React, { useState } from "react";
import "./Navbar.css";
import Settings from "../settingscomponent/Settings";
import iconSettings from "../../assets/iconSettings.svg";
import SettingsSound from "../../assets/Sounds/Settings.mp3";

const Navbar = () => {
  const [showSettings, setShowSettings] = useState(false);

  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play().catch((error) => {
      console.error("Error al reproducir el sonido:", error);
    });
  };

  return (
    <div className="major_container">
      <div>
        <h2>PomoTimer</h2>
      </div>
      <div className="settings-buttons">
        <button
          className="settings"
          onClick={() => {
            playSound(SettingsSound);
            setShowSettings(true);
          }}
        >
          <img src={iconSettings} alt="Icon" className="icon" />
          Settings
        </button>
      </div>

      {/* Pop-up modal */}
      {showSettings && (
        <div className="modal_overlay">
          <div className="modal_content">
            <button
              className="close_button"
              onClick={() => {
                playSound(SettingsSound);
                setShowSettings(false);
              }}
            >
              ✖
            </button>
            <Settings />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
