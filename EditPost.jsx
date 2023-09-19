import { useState, useEffect } from 'react';

function EditPost() {
  const [post, setPost] = useState({ title: '', content: '' });
  const postId = 1;
  const endpoint = 'http://localhost:8000/posts/' + postId;


  
  const handleTitleChange = (e) => {
    setPost({ ...post, title: e.target.value });
  };

  const handleContentChange = (e) => {
    setPost({ ...post, content: e.target.value });
  };

  const handleSave = () => {
    console.log('Updating post:', post);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`${endpoint}/${post.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      setPost({ title: '', content: '' });
      console.log('Post deleted successfully');
    } catch (error) {
      console.error(error);
    }
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
      <button onClick={handleSave}>Save</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default EditPost;
