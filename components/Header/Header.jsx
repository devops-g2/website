import { useAuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const { user, isLoggedIn } = useAuthContext();
  return (
    <>
      {isLoggedIn ? (
        <div className="header"> Logged in as: {user.name}</div>
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
