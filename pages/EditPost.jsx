import { useState, useEffect } from 'react'
import { editAPost } from '../services/EditPost'
import { useAuthContext } from '../contexts/authContext'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import '../styles/EditPost.css'
import { fetchOnePost } from '../services/fetchPosts'
import { LeftGutter, RightGutter } from '../components/Gutters/Gutters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export const EditPost = () => {
  const { postId } = useParams()
  const { user } = useAuthContext()
  const [name, setPostTitle] = useState('')
  const [content, setPostContent] = useState('')
  const [post, setPost] = useState(null)
  const [success, setSuccess] = useState(false)
  const author = user.id
  const id = postId.slice(1)

  const handlePostTitleChange = (e) => {
    setPostTitle(e.target.value)
  }

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value)
  }
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    const fetchDetailedPost = async () => {
      try {
        const postData = await fetchOnePost(id)
        setPost(postData)
        setPostTitle(postData.name)
        setPostContent(postData.content)
      } catch (error) {
        console.error(error)
      }
    }
    fetchDetailedPost()
  }, [id, postId])

  const handleEditPost = async () => {
    try {
      const response = await editAPost(name, content, author, id)
      const { success } = response

      if (success) {
        setSuccess(true)
      } else {
        setSuccess(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  console.log(post)

  return (
    <div className="editPostContext">
      <div className="leftGutter">
        <LeftGutter />
      </div>
      <div className="center">
        <div className="submitContainer">
          <h2>Edit Post</h2>
          <FontAwesomeIcon
            className="goBackButton"
            icon={faArrowLeft}
            onClick={() => navigate(-1)}
            style={{ cursor: 'pointer' }}
          />
          <input
            type="text"
            value={name}
            onChange={handlePostTitleChange}
            placeholder="Enter a title"
          />

          <textarea
            value={content}
            onChange={handlePostContentChange}
            placeholder="Enter post content"
            className="contentInput"
          />
          {success && (
            <div>
              <p>Changes saved!</p>
            </div>
          )}
          <button className="submitButton" onClick={handleEditPost}>
            Save
          </button>
        </div>
      </div>
      <div className="rightGutter">
        <RightGutter />
      </div>
    </div>
  )
}
