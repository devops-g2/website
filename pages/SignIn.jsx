import { useState } from 'react'
import { handleLogin } from '../services/userSignIn'
import { useAuthContext } from '../contexts/authContext'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/index.css'
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

  const handleUserLogIn = async () => {
    const { success, userData } = await handleLogin(email, password)
    if (success) {
      login(userData)
    }
    navigate('/')
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
                    style={{ textDecoration: 'none' }}
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
