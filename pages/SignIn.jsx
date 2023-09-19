import { useState } from "react";
import { handleLogin } from "../services/userSignIn";
import { useAuthContext } from "../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/index.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleUserLogIn = async () => {
    const { success, userData } = await handleLogin(email, password);
    if (success) {
      login(userData);
    }
    navigate("/");
  };

  return (
    <>
      <div className="login-context">
        <div className="login-container">
          <h2>Welcome back!</h2>
          <h3>sign in to access your account</h3>
          <div className="form-group">
            <div className="email-input">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="password-input">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <button
              className="sign-in-button"
              type="submit"
              onClick={handleUserLogIn}
            >
              Sign in
            </button>
          </div>
          <div className="not-a-member">
            <h4>
              Not a member?{" "}
              <Link className="register-link">Register here.</Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
