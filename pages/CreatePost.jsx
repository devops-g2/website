import { useState } from 'react'
import { handleAddPost } from '../services/createPost'
import { useAuthContext } from '../contexts/authContext'
import { useNavigate } from 'react-router-dom'
import '../styles/CreatePost.css'

const CreatePost = ({ addPost }) => {
  const { user } = useAuthContext()

  const [postTitle, setPostTitle] = useState('')
  const [postContent, setPostContent] = useState('')
  const [postTags, setPostTags] = useState('')

  const author = user.id

  const handlePostTitleChange = (e) => {
    setPostTitle(e.target.value)
  }

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value)
  }

  const handlePostTagsChange = (e) => {
    setPostTags(e.target.value)
  }

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <input
        type="text"
        placeholder="Title"
        value={postTitle}
        onChange={handlePostTitleChange}
      />
      <textarea
        value={postContent}
        onChange={handlePostContentChange}
        placeholder="Write your post here..."
      />
      <input
        type="text"
        placeholder="Tags (comma-separated)"
        value={postTags}
        onChange={handlePostTagsChange}
      />
      <button onClick={() => handleAddPost(postTitle, postContent, author)}>
        Submit
      </button>
    </div>
  )
}

export default CreatePost
