import { useState, useEffect } from 'react';
import { useAuthContext } from '../contexts/authContext';
import { EditAPost } from '../services/EditPost';
export const EditPost = () => {
  const { user } = useAuthContext();
  const [post, setPost] = useState({ name: '', content: '' });
  const [name, setName] = useState()
  const [content, setContent] = useState()
  const author = user.id


  return (
    <div>
      <h2>Edit Post</h2>
      <div>
        <label>Title:</label>
        <input type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a title"
        />

        <br />
        <label>Content:</label>
        <textarea value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter post content"
        />
      </div>
      <button onClick={() => EditAPost(name, content)}>Save</button>
    </div>
  );
}

