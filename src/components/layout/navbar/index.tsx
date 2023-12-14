import "./index.scss";
import moonIcon from "../../../assets/icon-moon.svg";
import sunIcon from "../../../assets/icon-sun.svg";

import { useState } from "react";
type Props = {};

const Navbar = (props: Props) => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <nav className="nav-container">
      <div className="nav-left-col">
        <h1>devfinder</h1>
      </div>
      <div className="nav-right-col">
        <div className="mode-switcher" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <>
              <h4>DARK</h4>
              <img src={moonIcon} />
            </>
          ) : (
            <>
              <h4>LIGHT</h4>
              <img src={sunIcon} />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
