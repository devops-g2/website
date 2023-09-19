import { useAuthContext } from "../contexts/authContext";
import { useEffect } from "react";
import { Container } from "../components/Container/container";
import { LandingPage } from "../pages/LandingPage";
import { Header } from "../components/Header/Header";
import { Login } from "../pages/SignIn";
import CreatePost from "../pages/CreatePost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Registration } from "../pages/UserRegistration";

export default function App() {
  const { isLoggedIn } = useAuthContext();

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <Router>
        <Header />
        {isLoggedIn ? (
          <Container>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/create-post" element={<CreatePost />} />
            </Routes>
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
