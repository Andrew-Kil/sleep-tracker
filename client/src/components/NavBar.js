import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <div>
    <nav>
      <span>
        <NavLink to="/">
          <span role="img" aria-label="sleep emoji">
            😴
          </span>
        </NavLink>
      </span>
      <div>
        <NavLink to="sleep-logs">Sleep Logs</NavLink>
      </div>
      <div>
        <NavLink to="dream-themes">Dream Themes</NavLink>
      </div>
    </nav>
  </div>
);
export default NavBar;
