import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchOnePost } from '../services/fetchPosts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../styles/DetailedPost.css'

export const DetailedPost = () => {
  const { postId } = useParams()
  const [post, setPost] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchDetailedPost = async () => {
      try {
        const postData = await fetchOnePost(postId)
        setPost(postData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchDetailedPost()
  })

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <div className="detailedPostContext">
      <FontAwesomeIcon
        className="back-button"
        icon={faArrowLeft}
        onClick={() => navigate(-1)}
        style={{ cursor: 'pointer' }}
      />
      <div className="postContainer">
        <div className="postAuthor">
          {post.user.name} <span>{post.created_at}</span>
        </div>
        <div className="postTitle">
          <h2>{post.name}</h2>
        </div>
        <div className="postContent">{post.content}</div>
      </div>
    </div>
  )
}
