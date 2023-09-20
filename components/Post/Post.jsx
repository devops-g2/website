/* eslint-disable react/prop-types */
import './Post.css'
import { Link } from 'react-router-dom'

export const Post = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className="post">
        <div className="comments">{post.comments} comments</div>
        <div className="post-content">
          <h2 className="post-title">{post.name}</h2>
          <p className="post-content">{post.content}</p>
          <div className="user-info">
            <span className="username">{post.user.name}</span>
            <span className="post-date">{post.created_at}</span>
          </div>
          <div className="tags">
            {post.tags.map((tag) => (
              <span key={tag.id} className="tag">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
