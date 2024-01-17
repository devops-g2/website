import { useState } from 'react'
import {
  handleAddPost,
  handleAddTag,
  handleTagAndPost,
} from '../services/createPost'
import { useAuthContext } from '../contexts/authContext'
import { useNavigate } from 'react-router-dom'
import { LeftGutter, RightGutter } from '../components/Gutters/Gutters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import '../styles/CreatePost.css'

export const CreatePost = () => {
  const { user } = useAuthContext()
  const [postTitle, setPostTitle] = useState('')
  const [postContent, setPostContent] = useState('')
  const [postTags, setPostTags] = useState('')
  const navigate = useNavigate()

  const author = user.id

  const handlePostTitleChange = (e) => {
    setPostTitle(e.target.value)
  }

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value)
  }

  const handlePostTagsChange = (e) => {
    const tags = e.target.value.trim()
    setPostTags(tags)
  }

  const handleSubmit = async () => {
    if (postContent.trim() !== '') {
      try {
        const postId = await handleAddPost(postTitle, postContent, author)

        const tagsString = Array.isArray(postTags)
          ? postTags.join(', ')
          : postTags

        const tags = tagsString.split(',').map((tag) => tag.trim())

        const tagIds = await Promise.all(
          tags.map(async (tag) => {
            const tagId = await handleAddTag(tag)
            return tagId
          }),
        )

        await Promise.all(
          tagIds.map(async (tagId) => {
            await handleTagAndPost(tagId, postId)
          }),
        )

        navigate('/')
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <>
      <div className="createPostContext">
        <div className="leftGutter">
          <LeftGutter />
        </div>
        <div className="center">
          <div className="submitContainer">
            <FontAwesomeIcon
              className="goBackButton"
              icon={faArrowLeft}
              onClick={() => navigate(-1)}
              style={{ cursor: 'pointer' }}
            />
            <input
              className="titleInput"
              type="text"
              placeholder="Title..."
              value={postTitle}
              onChange={handlePostTitleChange}
            />
            <textarea
              className="contentInput"
              value={postContent}
              onChange={handlePostContentChange}
              placeholder="Write your post here..."
            />
            <input
              className="tagInput"
              type="text"
              placeholder="Tags: #Art, #Fashion, #Cooking..."
              value={postTags}
              onChange={handlePostTagsChange}
            />
            <button className="submitButton" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
        <div className="rightGutter">
          <RightGutter />
        </div>
      </div>
    </>
  )
}
