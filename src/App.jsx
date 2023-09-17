import { useAuthContext } from "../contexts/authContext";
import { useEffect } from "react";
import { Container } from "../components/Container/container";
import { LandingPage } from "../pages/LandingPage";

export default function App() {
  const { isLoggedIn, user, logout } = useAuthContext();

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <Container>
          <div>
            <h2>Welcome!, {user.name}!</h2>
            <button onClick={logout}>Logout</button>
          </div>
        </Container>
      ) : (
        <LandingPage />
      )}
    </>
  );
}
