import { useState, useEffect, useCallback } from 'react'
import { EditAPost } from '../services/EditPost'
import { useAuthContext } from '../contexts/authContext'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import '../components/EditPost/StyleEditPost.css'
import { fetchOnePost } from '../services/fetchPosts'

export const EditPost = () => {
  const { postId } = useParams()
  const { user } = useAuthContext()
  const [name, setPostTitle] = useState('')
  const [content, setPostContent] = useState('')
  const [post, setPost] = useState(null)
  const author = user.id

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
        const id = postId.slice(1)
        const postData = await fetchOnePost(id)
        setPost(postData)
        setPostTitle(postData.name)
        setPostContent(postData.content)
      } catch (error) {
        console.error(error)
      }
    }
    fetchDetailedPost()
  }, [postId])

  const handleEditPost = useCallback(() => {
    EditAPost(name, content, author, postId)
  }, [name, content, author, postId])

  console.log(post)

  return (
    <div className="editPostContext">
      <div></div>
      <h2>Edit Post</h2>
      <button onClick={goBack}>Go back</button>
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
      />
      <button onClick={handleEditPost}>Save</button>
    </div>
  )
}
