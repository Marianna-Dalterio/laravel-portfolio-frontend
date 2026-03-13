import { Link, NavLink } from "react-router-dom";

export default function AppHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <Link className="navbar brand" href="/">
          Il mio Portfolio
        </Link>
        <div className="navbar-nav">
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
