import { useState } from "react";
import { handleLogin } from "../services/userSignIn";
import { useAuthContext } from "../contexts/authContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();

  const handleUserLogIn = async () => {
    const { success, userData } = await handleLogin(email, password);
    if (success) {
      login(userData);
      console.log(userData);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" onClick={handleUserLogIn}>
        Log In
      </button>
    </div>
  );
};
