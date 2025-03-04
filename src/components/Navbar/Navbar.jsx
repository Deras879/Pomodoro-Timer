import React, { useState } from "react";
import "./Navbar.css";
import Settings from "../settingscomponent/Settings";

const Navbar = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="major_container">
      <div>
        <h3>PomoTimer</h3>
      </div>
      <div>
        <button onClick={() => setShowSettings(true)}>Settings</button>
        <button>Login</button>
      </div>

      {/* Pop-up modal */}
      {showSettings && (
        <div className="modal_overlay">
          <div className="modal_content">
            <button
              className="close_button"
              onClick={() => setShowSettings(false)}
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
