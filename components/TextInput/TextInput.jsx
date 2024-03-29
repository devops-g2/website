/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faEyeSlash,
  faEnvelope,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

export const TextInput = ({ type, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="input-container">
      <input
        type={showPassword ? 'url' : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {type === 'password' && (
        <span className="password-toggle" onClick={togglePasswordVisibility}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </span>
      )}
      {type === 'email' && (
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
      )}
      {type === 'user' && (
        <span>
          <FontAwesomeIcon icon={faUser} />
        </span>
      )}
    </div>
  )
}
