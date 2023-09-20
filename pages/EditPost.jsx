import { useState } from 'react'
import { EditAPost } from '../services/EditPost'
import { useAuthContext } from '../contexts/authContext'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import '../components/EditPost/StyleEditPost.css';


export const EditPost = () => {
  const { postId } = useParams();
  const { user } = useAuthContext();
  const [name, setPostTitle] = useState();
  const [content, setPostContent] = useState();
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


  return (
    <div>
      <h2>Edit Post</h2>

      <button onClick={goBack}>Go back</button>
      <input type="text"
        value={name}
        onChange={handlePostTitleChange}
        placeholder="Enter a title"
      />


      <textarea value={content}
        onChange={handlePostContentChange}
        placeholder="Enter post content"
      />

      <button onClick={() => EditAPost(name, content, author, postId)}>Save</button>
    </div>
  )
}

