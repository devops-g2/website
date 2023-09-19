import { useAuthContext } from "../contexts/authContext";
import { useEffect } from "react";
import { Container } from "../components/Container/container";
import { LandingPage } from "../pages/LandingPage";
import { Header } from "../components/Header/Header";
import { Login } from "../pages/SignIn";
import CreatePost from "../pages/CreatePost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Registration } from "../pages/UserRegistration";
import { EditPost } from "../pages/EditPost";


export default function App() {
  const { isLoggedIn, user, logout } = useAuthContext();

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <Router>
        <Header />
        {isLoggedIn ? (
          <Container>
            <div>
              <h2>Welcome!, {user.name}!</h2>
              <button onClick={logout}>Logout</button>
              <CreatePost />
              <EditPost />
            </div>
          </Container>
        ) : (
          <>
            <Container>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
              </Routes>
            </Container>
          </>
        )}
      </Router>
    </>
  );
}
