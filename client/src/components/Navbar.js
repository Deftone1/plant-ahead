import { NavLink } from "react-router-dom";
import { useAuth } from "../util/authContext";

import "./Navbar.css";

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <nav className="nav">
      <NavLink
        className="nav-link"
        exact
        to="/"
        activeClassName="nav-link-active"
      >
        Discover
      </NavLink>
      {isLoggedIn || (
        <NavLink
          className="nav-link"
          to="/login"
          activeClassName="nav-link-active"
        >
          Login
        </NavLink>
      )}
      {isLoggedIn || (
        <NavLink
          className="nav-link"
          to="/signup"
          activeClassName="nav-link-active"
        >
          Signup
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink
          className="nav-link"
          to="/protected/main"
          activeClassName="nav-link-active"
        >
          Main
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink
          className="nav-link"
          to="/protected/projects"
          activeClassName="nav-link-active"
        >
          MyProjects
        </NavLink>
      )}
      {isLoggedIn && <button className="navbar-nav ml-auto m-2 p-2" onClick={logout}>Logout</button>}
    </nav>
  );
}
export default Navbar;
