import { useState, useEffect } from 'react';
import { useAuthContext } from '../contexts/authContext';
import { EditAPost } from '../services/EditPost';
export const EditPost = () => {
  const { user } = useAuthContext();
  const [post, setPost] = useState({ name: '', content: '' });
  const author = user.id



  const handleTitleChange = (e) => {
    setPost({ ...post, title: e.target.value });
  };

  const handleContentChange = (e) => {
    setPost({ ...post, content: e.target.value });
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <div>
        <label>Title:</label>
        <input type="text"
          value={post.title}
          onChange={handleTitleChange}
          placeholder="Enter a title"
        />

        <br />
        <label>Content:</label>
        <textarea value={post.content}
          onChange={handleContentChange}
          placeholder="Enter post content"
        />
      </div>
      <button onClick={EditAPost(post.name, post.content, author)}>Save</button>
    </div>
  );
}

