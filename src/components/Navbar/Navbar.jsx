import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="major_container">
      <div>
        <h3>PomoTimer</h3>
      </div>
      <div>
        <button>settings</button>
        <button>Loging</button>
      </div>
    </div>
  );
};

export default Navbar;
