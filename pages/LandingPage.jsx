import "../styles/index.css";
import { LeftGutter } from "../components/LeftGutter/LeftGutter";
import { RightGutter } from "../components/RightGutter/RightGutter";
import { fetchAllPosts } from "../services/fetchPosts";
import { useState, useEffect } from "react";
import { Post } from "../components/Post/Post";

export const LandingPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const postData = await fetchAllPosts();
        setPosts(postData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="context">
        <div className="leftGutter">
          <LeftGutter />
        </div>
        <div className="center">
          <div>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <Post post={post} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rightGutter">
          <RightGutter />
        </div>
      </div>
    </>
  );
};
