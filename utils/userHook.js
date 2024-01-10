import { useAuthContext } from '../contexts/authContext'

export const useLoggedInUserId = () => {
  const { user } = useAuthContext()
  return user ? user.id : null
}
