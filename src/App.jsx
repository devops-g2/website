import { useAuthContext } from '../contexts/authContext'
import { useEffect } from 'react'
import { Container } from '../components/Container/Container'
import { LandingPage } from '../pages/LandingPage'
import { Header } from '../components/Header/Header'
import { Login } from '../pages/SignIn'
import { CreatePost } from '../pages/CreatePost'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Registration } from '../pages/UserRegistration'
import { DetailedPost } from '../pages/DetailedPost'
import { Profile } from '../pages/Profile'
import { EditPost } from '../pages/EditPost'

export default function App() {
  const { isLoggedIn } = useAuthContext()

  useEffect(() => {
    console.log(isLoggedIn)
  }, [isLoggedIn])

  return (
    <>
      <Router>
        <Header />
        {isLoggedIn ? (
          <Container>
            <Routes>
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/posts/:postId" element={<DetailedPost />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/posts/edit/:postId" element={<EditPost />} />
            </Routes>
          </Container>
        ) : (
          <></>
        )}
        <Container>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </Container>
      </Router>
    </>
  )
}
