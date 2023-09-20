import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchOnePost } from '../services/fetchPosts'
import { Link } from 'react-router-dom'


export const DetailedPost = () => {
  const { postId } = useParams()
  const [post, setPost] = useState(null)

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
    <div>
      {post.id}, {post.content}, {post.user.name}
      <Link to={`/posts/edit/${post.id}`}>

        <button className="edit-post-button">Edit a post</button>
      </Link>

    </div>

  )
}
