import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchOnePost } from '../services/fetchPosts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../styles/DetailedPost.css'
import { LeftGutter, RightGutter } from '../components/Gutters/Gutters'
import { convertCreatedAtToDays } from '../utils/CreatedWhen'

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
    <>
      <div className="context">
        <div className="leftGutter">
          <LeftGutter />
        </div>
        <div className="center">
          <div className="detailedPostContext">
            <FontAwesomeIcon
              className="backButtonDetailedPost"
              icon={faArrowLeft}
              onClick={() => navigate(-1)}
              style={{ cursor: 'pointer' }}
            />
            <div className="postContainer">
              <div className="postAuthor">
                {post.user.name}{' '}
                <span className="createdAt">
                  {convertCreatedAtToDays(post.created_at)}
                </span>
              </div>
              <div className="postTitle">
                <h2>{post.name}</h2>
              </div>
              <div className="postContent">{post.content}</div>
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
