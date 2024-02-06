import { useState } from 'react'
import { handleLogin } from '../services/userSignIn'
import { useAuthContext } from '../contexts/authContext'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/index.css'
import '../styles/Login.css'
import { GreaterThanIcon } from '../src/assets/icons/GreaterThan'
import { TextInput } from '../components/TextInput/TextInput'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LeftGutter, RightGutter } from '../components/Gutters/Gutters'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuthContext()
  const navigate = useNavigate()
  const [loginError, setLoginError] = useState('')

  const handleUserLogIn = async () => {
    try {
      const response = await handleLogin(email, password)
      const { success, userData } = response
      if (success) {
        login(userData)
        navigate('/')
      } else {
        setLoginError(response.error)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="loginContext">
        <div className="leftGutter">
          <LeftGutter />
        </div>
        <div className="center">
          <div className="login-context">
            <FontAwesomeIcon
              className="back-button"
              icon={faArrowLeft}
              onClick={() => navigate(-1)}
              style={{ cursor: 'pointer' }}
            />
            <div className="login-container">
              <div className="login-greeting">
                <h2>Welcome back!</h2>
                <h3>sign in to access your account</h3>
              </div>
              <div className="form-group">
                <div className="email-input">
                  <TextInput
                    type="email"
                    placeholder="Email or username"
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
              {loginError && (
                <p
                  style={{
                    color: 'red',
                    alignSelf: 'center',
                    wordBreak: 'break-word',
                    textAlign: 'center',
                    maxWidth: '250px',
                  }}
                >
                  {loginError === 'invalidPasswordException'
                    ? 'Invalid password. Please try again.'
                    : loginError === 'userNotFoundException'
                      ? 'User not found. Please check your email or username.'
                      : 'An error occurred. Please try again later.'}
                </p>
              )}
              <div className="button-container">
                <button
                  className="sign-in-button"
                  type="submit"
                  onClick={handleUserLogIn}
                >
                  <span className="button-text">Sign in</span>
                  <GreaterThanIcon className="greater-than" />
                </button>
              </div>
              <div className="not-a-member">
                <h4>
                  Not a member?{' '}
                  <Link
                    className="register-link"
                    to="/registration"
                    style={{ textDecoration: 'none', color: '#f8542f' }}
                  >
                    Register here.
                  </Link>
                </h4>
              </div>
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
