import { useAuthContext } from '../../contexts/authContext'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  const { user, isLoggedIn } = useAuthContext()
  return (
    <>
      {isLoggedIn ? (
        <div className="header">
          <h2 className="logged-in-as">
            Logged in as{' '}
            <span className="username">
              <Link
                to="/profile"
                style={{ textDecoration: 'none', color: '#f8542f' }}
              >
                {user.name}
              </Link>
            </span>
          </h2>
        </div>
      ) : (
        <div className="header">
          <h3>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              Login
            </Link>
          </h3>
        </div>
      )}
    </>
  )
}
