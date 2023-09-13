import React from 'react';

const Forum = ({ posts }) => {
    return (
        <div>
            <h2>Forum Posts</h2>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post}</li>
                ))}
            </ul>
        </div>
    );
};

export default Forum;