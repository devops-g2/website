import { useAuthContext } from '../contexts/authContext'
import { LeftGutter, RightGutter } from '../components/Gutters/Gutters'
import '../styles/Profile.css'
import { useNavigate } from 'react-router'

export const Profile = () => {
  const { logout } = useAuthContext()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <>
      <div className="profileContext">
        <div className="leftGutter">
          <LeftGutter />
        </div>
        <div className="center">
          <div className="logoutButtonContainer">
            <button className="logoutButton" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <div className="rightGutter">
          <RightGutter />
        </div>
      </div>
    </>
  )
}
