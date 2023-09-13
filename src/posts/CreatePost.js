import React, { useState } from 'react';

const CreatePost = ({ addPost }) => {
    const [postContent, setPostContent] = useState('');

    const handlePostContentChange = (e) => {
        setPostContent(e.target.value);
    };

    const handleAddPost = () => {
        if (postContent.trim() !== '') {
            addPost(postContent);
            setPostContent('');
        }
    };

    return (
        <div>
            <textarea
                value={postContent}
                onChange={handlePostContentChange}
                placeholder="Write your post here..."
            />
            <button onClick={handleAddPost}>Submit</button>
        </div>
    );
};

export default CreatePost;
