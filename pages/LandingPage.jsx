import "../styles/index.css";
import { LeftGutter } from "../components/LeftGutter/LeftGutter";
import { RightGutter } from "../components/RightGutter/RightGutter";
import { fetchAllPosts } from "../services/fetchPosts";
import { useState, useEffect } from "react";
import { Post } from "../components/Post/Post";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";

export const LandingPage = () => {
  const [posts, setPosts] = useState([]);
  const { isLoggedIn } = useAuthContext();

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
            {isLoggedIn ? (
              <Link to="/create-post">
                <button className="create-post-button">Create a post</button>
              </Link>
            ) : null}
            <ul>
              {posts.map((post) => (
                <li key={post.id} style={{ textDecoration: "none" }}>
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
