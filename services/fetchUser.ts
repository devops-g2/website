export interface User {
  id: number
  name: string
  email: string
}

export const fetchUser = async (userId: number): Promise<User | null> => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/users/${userId}`)

    if (response.ok) {
      const userData = await response.json()
      return userData
    } else {
      console.error(
        `Failed to fetch user data for user with ID ${userId}. Response:`,
        response.status,
        response.statusText,
      )
      return null
    }
  } catch (error) {
    console.error(`Error fetching user data for user with ID ${userId}:`, error)
    return null
  }
}
