export interface User {
  id: number;
  name: string;
  email: string;
}

export const fetchUser = async (userId: number): Promise<User | null> => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/users/${userId}`);
    if (response.ok) {
      const userData: User = await response.json();
      return userData;
    } else {
      throw new Error("Failed to fetch user data");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
