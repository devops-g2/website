/* eslint-disable react/prop-types */
import './Post.css'
import { ConditionalLink } from '../../utils/ConditionalLink'
import { useAuthContext } from '../../contexts/authContext'
import { convertCreatedAtToDays } from '../../utils/CreatedWhen'

export const Post = ({ post }) => {
  const { isLoggedIn } = useAuthContext()

  return (
    <>
      <ConditionalLink to={`/posts/${post.id}`} condition={isLoggedIn}>
        <div className="post">
          <div className="post-content">
            <h2 className="post-title">{post.name}</h2>
            <p className="post-content">{post.content}</p>
            <div className="user-info">
              <span className="username">{post.user.name}</span>
              <span className="post-date">
                {convertCreatedAtToDays(post.created_at)}
              </span>
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
      </ConditionalLink>
    </>
  )
}
