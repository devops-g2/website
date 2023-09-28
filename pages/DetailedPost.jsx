import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchOnePost } from '../services/fetchPosts'
import { handleCreateComment } from '../services/createComment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fetchCommentsByPostId } from '../services/fetchComments'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { fetchUser } from '../services/fetchUser'
import '../styles/DetailedPost.css'
import { LeftGutter, RightGutter } from '../components/Gutters/Gutters'
import { convertCreatedAtToDays } from '../utils/CreatedWhen'
import { useLoggedInUserId } from '../utils/userHook'

export const DetailedPost = () => {
  const { postId } = useParams()
  const [post, setPost] = useState(null)
  const [commentContent, setCommentContent] = useState('')
  const [comments, setComments] = useState([])
  const navigate = useNavigate()
  const loggedInUserId = useLoggedInUserId()

  useEffect(() => {
    const fetchDetailedPost = async () => {
      try {
        const postData = await fetchOnePost(postId)
        setPost(postData)

        setComments([])

        const commentsData = await fetchCommentsByPostId(postId)
        setComments(commentsData)

        const updatedComments = await Promise.all(
          commentsData.map(async (comment) => {
            const user = await fetchUser(comment.author)

            const authorUsername = user?.name || 'Unknown'

            return { ...comment, authorUsername }
          }),
        )

        setComments(updatedComments)
      } catch (error) {
        console.error(error)
      }
    }

    fetchDetailedPost()
  }, [postId])

  const handleCommentContentChange = (e) => {
    setCommentContent(e.target.value)
  }

  const handleCommentSubmit = async () => {
    if (commentContent.trim() !== '') {
      try {
        const commentData = await handleCreateComment(
          postId,
          commentContent,
          loggedInUserId,
        )

        setCommentContent('')
        setComments((prevComments) => [...prevComments, commentData])
      } catch (error) {
        console.error(error)
      }
    }
  }

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
            <div className="comment-input">
              <input
                value={commentContent}
                onChange={handleCommentContentChange}
                placeholder="Leave a comment..."
              />
              <button
                className="submitCommentButton"
                onClick={handleCommentSubmit}
              >
                Submit Comment
              </button>
            </div>
            <div className="comments">
              <h3>Comments:</h3>
              <ul>
                {comments.map((comment) => (
                  <li key={comment.id}>
                    <strong className="commentUsername">
                      {comment.authorUsername}:
                    </strong>{' '}
                    {comment.content}
                  </li>
                ))}
              </ul>
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
