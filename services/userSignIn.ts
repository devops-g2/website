export const handleLogin = async (identifier: string, password: string) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/users?email=${identifier}&username=${identifier}`,
    )

    if (!response.ok) {
      return { success: false, error: 'loginFailedException' }
    }

    const userData = await response.json()

    const user = userData.find(
      (user) => user.email === identifier || user.name === identifier,
    )

    if (user) {
      if (user.password === password) {
        return { success: true, userData: user }
      } else {
        return { success: false, error: 'invalidPasswordException' }
      }
    } else {
      return { success: false, error: 'userNotFoundException' }
    }
  } catch (error) {
    console.log('Error', error)
    return { success: false, error: 'loginFailedException' }
  }
}
