export const handleLogin = async (email: string, password: string) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/users?email=${email}`);

    if (!response.ok) {
      console.error("User not found.");
      return { success: false, message: "User not found" };
    }

    const userData = await response.json();

    const user = userData.find((user) => user.email === email);

    if (user) {
      if (user.password === password) {
        console.log("Login successful");
        return { success: true, userData: user };
      } else {
        console.error("Invalid password.");
        return { success: false, message: "Invalid password" };
      }
    } else {
      console.error("User not found.");
      return { success: false, message: "User not found" };
    }
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: "Login error" };
  }
};
