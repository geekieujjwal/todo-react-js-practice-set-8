import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const getActive = ({ isActive }) =>
    isActive
      ? {
          color: "red",
          margin: "0.5rem 0",
          fontWeight: "700",
        }
      : null;

  return (
    <div>
      <h1>My ToDo's</h1>
      <nav>
        <NavLink to="/" style={getActive} className="nav-link">
          Home
        </NavLink>
        <br />
        <NavLink to="done" style={getActive} className="nav-link">
          Done Todos
        </NavLink>
        <br />
        <NavLink to="open" style={getActive} className="nav-link">
          Open Todos
        </NavLink>
        <br />
        {/* <NavLink to="/todo/:id" style={getActive} className="nav-link">
          Todo Detail
        </NavLink> */}
      </nav>
    </div>
  );
};

export default Header;
