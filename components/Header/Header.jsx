import { useAuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const { user, isLoggedIn, logout } = useAuthContext();
  return (
    <>
      {isLoggedIn ? (
        <div className="header">
          <h2>Logged in as: {user.name}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="header">
          <h3>
            <Link to="/login">Login</Link>
          </h3>
        </div>
      )}
    </>
  );
};
