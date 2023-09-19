import { useAuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const { user, isLoggedIn, logout } = useAuthContext();
  return (
    <>
      {isLoggedIn ? (
        <div className="header">
          <h2 className="logged-in-as">
            Logged in as <span className="username">{user.name}</span>
          </h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="header">
          <h3>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </h3>
        </div>
      )}
    </>
  );
};
