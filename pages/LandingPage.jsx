import '../styles/index.css'
import { LeftGutter, RightGutter } from '../components/Gutters/Gutters'
import { fetchAllPosts } from '../services/fetchPosts'
import { useState, useEffect } from 'react'
import { Post } from '../components/Post/Post'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/authContext'

export const LandingPage = () => {
  const [posts, setPosts] = useState([])
  const { isLoggedIn } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      try {
        const postData = await fetchAllPosts()
        setPosts(postData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div className="context">
        <div className="leftGutter">
          <LeftGutter />
        </div>
        <div className="center">
          {isLoggedIn && (
            <div className="createPost">
              <input
                type="text"
                placeholder="Create Post"
                className="createPostInput"
                onClick={() => navigate('/create-post')}
              />
            </div>
          )}
          <div className="postsContainer">
            <ul>
              {posts.map((post) => (
                <li key={post.id} style={{ textDecoration: 'none' }}>
                  <Post post={post} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rightGutter">
          <RightGutter />
        </div>
      </div>
    </>
  )
}
