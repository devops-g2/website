import React, { useState } from 'react';

const CreatePost = ({ addPost }) => {
    const [postContent, setPostContent] = useState('');
    const name = "Japp";
    const author = "Haj";
    const handlePostContentChange = (e) => {
        setPostContent(e.target.value);
    };

    const handleAddPost = async () => {
        const response = await fetch("http://127.0.0.1/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, postContent, author
            })
        })
        const data = response.json()
        console.log(data)

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
