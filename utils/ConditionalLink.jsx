/* eslint-disable react/prop-types */
import { Link as RouterLink, useNavigate } from 'react-router-dom'

export const ConditionalLink = ({ to, condition, ...props }) => {
  const navigate = useNavigate()

  const handleClick = (e) => {
    if (!condition) {
      e.preventDefault()
      navigate('/login')
    }
  }

  if (condition) {
    return <RouterLink to={to} {...props} />
  } else {
    return (
      <a href="#" onClick={handleClick} {...props}>
        {props.children}
      </a>
    )
  }
}
