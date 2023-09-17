import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "../contexts/authContext";
const localStorageIsLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider storedIsLoggedIn={localStorageIsLoggedIn}>
    <App />
  </AuthProvider>
);
