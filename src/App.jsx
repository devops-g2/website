import "./App.css";
import { Registration } from "../pages/UserRegistration";
import { useAuthContext } from "../contexts/authContext";
import { useEffect } from "react";
import { Login } from "../pages/SignIn";
import CreatePost from "../pages/CreatePost";

export default function App() {
  const { isLoggedIn, user, logout } = useAuthContext();

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <div>
          <h2>Welcome!, {user.name}!</h2>
          <button onClick={logout}>Logout</button>
          <CreatePost />
        </div>
      ) : (
        <>
          <Registration />
          <Login />
        </>
      )}
    </>
  );
}
