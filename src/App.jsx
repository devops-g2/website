import "./App.css";
import { Registration } from "../pages/UserRegistration";
import { useAuth } from "../contexts/authContext";
import { useEffect } from "react";

export default function App() {
  const { isLoggedIn, user, logout } = useAuth();

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <div>
          <h2>Welcome!, {user.name}!</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <Registration />
      )}
    </>
  );
}
