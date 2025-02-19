import axios from "axios";
import { NavLink, Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import UserContext from "../contexts/UserContext";
import toast from "react-hot-toast";
// import handleError from "../utils/handleError";

const API_URL = import.meta.env.VITE_API_URL;

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const [navOpen, setNavOpen] = useState(false);
  const { showBoundary } = useErrorBoundary();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post(
        `${API_URL}/users/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      setUser(null);

      setNavOpen(false);
      toast.success("Logout successful");
      navigate("/");
    } catch (err) {
      // const error = handleError(err);
      showBoundary(err);
    }
  };

  const toggleNavCollapse = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <img className="logo" src="/src/assets/iron_wolf.png" alt="skull" />
        <nav className={`${navOpen ? "visible p-4" : "invisible"}`}>
          <NavLink to="/" onClick={() => setNavOpen(false)}>
            Home
          </NavLink>

          {!user && (
            <NavLink to="/login" onClick={() => setNavOpen(false)}>
              Login
            </NavLink>
          )}

          {!user && (
            <NavLink to="/signup" onClick={() => setNavOpen(false)}>
              Signup
            </NavLink>
          )}

          {user && <Link onClick={logout}>Logout</Link>}
        </nav>
        <button onClick={toggleNavCollapse}>
          <hr />
          <hr />
          <hr />
        </button>
      </div>
    </header>
  );
};

export default Header;
