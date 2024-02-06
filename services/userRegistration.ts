export const handleUserRegistration = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    const usersResponse = await fetch('http://127.0.0.1:8000/users/')
    const existingUsers = await usersResponse.json()

    const userExists = existingUsers.some(
      (user) => user.name === name || user.email === email,
    )

    if (userExists) {
      return { success: false, error: 'userAlreadyExists' }
    }

    const registrationResponse = await fetch('http://127.0.0.1:8000/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })

    const data = await registrationResponse.json()

    if (registrationResponse.ok) {
      console.log('Registration successful')
      return { success: true }
    } else {
      console.error('Registration failed:', data)

      if (
        registrationResponse.status === 400 &&
        data.message === 'invalidPasswordException'
      ) {
        return { success: false, error: 'invalidPasswordException' }
      } else {
        return { success: false, error: 'registrationFailedException' }
      }
    }
  } catch (error) {
    console.error('Registration error:', error)
    return { success: false, error: 'registrationFailedException' }
  }
}
