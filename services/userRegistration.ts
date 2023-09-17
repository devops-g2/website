interface User {
  id: number;
  name: string;
  email: string;
}

export const handleUserRegistration = async (
  name: string,
  email: string,
  password: string,
  login: (userData: User) => void
) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    if (response.ok) {
      const userData = await response.json();
      const { id, name, email } = userData;
      login({ id, name, email });
      console.log("Registration successful");
    } else {
      const data = await response.json();
      console.error("Registration failed:", data);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
};
