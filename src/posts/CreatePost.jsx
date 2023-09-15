import React, { useState } from 'react';

const CreatePost = ({ addPost }) => {
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postTags, setPostTags] = useState('');
    const name = "Japp";
    const author = "Haj";

    const handlePostTitleChange = (e) => {
        setPostTitle(e.target.value);
    };

    const handlePostContentChange = (e) => {
        setPostContent(e.target.value);
    };

    const handlePostTagsChange = (e) => {
        setPostTags(e.target.value);
    };

    const handleAddPost = async () => {
        const response = await fetch("http://127.0.0.1/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: postTitle,
                content: postContent,
                tags: postTags.split(",").map(tag => tag.trim()), // Split tags by comma and trim whitespace
                name,
                author
            })
        });
        const data = await response.json();
        console.log(data);

        // Clear input fields after submitting
        setPostTitle('');
        setPostContent('');
        setPostTags('');
    };

    return (
        <div>
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
            <button onClick={handleAddPost}>Submit</button>
        </div>
    );
};

export default CreatePost;
