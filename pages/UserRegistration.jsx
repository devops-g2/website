import { useState } from 'react'
import { handleUserRegistration } from '../services/userRegistration'
import { LeftGutter, RightGutter } from '../components/Gutters/Gutters'
import { TextInput } from '../components/TextInput/TextInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../styles/Registration.css'
import { useNavigate } from 'react-router'
import { GreaterThanIcon } from '../src/assets/icons/GreaterThan'
import { Link } from 'react-router-dom'
import { Snackbar } from '../components/Snackbar/Snackbar'

export const Registration = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registrationError, setRegistrationError] = useState('')
  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const navigate = useNavigate()

  const handleRegistration = async () => {
    try {
      if (!name || !email || !password) {
        setRegistrationError('emptyFieldException')
        return
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        setRegistrationError('invalidEmailException')
        return
      }

      const { success, error } = await handleUserRegistration(
        name,
        email,
        password,
      )

      if (success) {
        setRegistrationSuccess(true)
        setTimeout(() => {
          navigate('/login')
        }, 2000)
      } else {
        setRegistrationError(error)
      }
    } catch (error) {
      console.error('Unexpected error during registration:', error)
      setRegistrationError('registrationFailedException')
    }
  }

  return (
    <>
      <div className="registrationContext">
        <div className="leftGutter">
          <LeftGutter />
        </div>
        <div className="center">
          <div className="registrationContext">
            <FontAwesomeIcon
              className="back-button"
              icon={faArrowLeft}
              onClick={() => navigate(-1)}
              style={{ cursor: 'pointer' }}
            />
            <div className="registrationContainer">
              <div className="login-greeting">
                <h2>Get Started</h2>
                <h3>by creating a free account.</h3>
              </div>
              <div className="form-group">
                <div className="username-input">
                  <TextInput
                    type="user"
                    placeholder="Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="email-input">
                  <TextInput
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="password-input">
                  <TextInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              {registrationError && (
                <div>
                  <p
                    style={{
                      color: 'red',
                      textAlign: 'center',
                    }}
                  >
                    {registrationError === 'emptyFieldException'
                      ? 'Please enter a username and email.'
                      : registrationError === 'userAlreadyExists'
                      ? 'Username or email is already taken. Please choose a different one.'
                      : registrationError === 'invalidPasswordException'
                      ? 'Password must be at least 5 characters long. Please choose a stronger password.'
                      : registrationError === 'invalidEmailException'
                      ? 'Please enter a valid email adress.'
                      : 'An unkown error occured, please try again later.'}
                  </p>
                </div>
              )}
              <div className="button-container">
                <button
                  className="sign-in-button"
                  type="submit"
                  onClick={handleRegistration}
                >
                  <span className="button-text">Register</span>
                  <GreaterThanIcon className="greater-than" />
                </button>
              </div>
              <div className="not-a-member">
                <h4>
                  Already a member?{' '}
                  <Link
                    className="register-link"
                    to="/login"
                    style={{ textDecoration: 'none', color: '#f8542f' }}
                  >
                    Log in here.
                  </Link>
                </h4>
              </div>
              {registrationSuccess && (
                <Snackbar message={'Registration successful, redirecting...'} />
              )}
            </div>
          </div>
        </div>
        <div className="rightGutter">
          <RightGutter />
        </div>
      </div>
    </>
  )
}
