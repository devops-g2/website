import { fetchUser } from "./fetchUser";
interface Tag {
  id: number;
  name: string;
}

interface Post {
  id: number;
  name: string;
  content: string;
  author: number;
  created_at: string;
  updated_at: string;
  tags: Tag[];
}

export const fetchAllPosts = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/posts");
    if (response.ok) {
      const postData = await response.json();
      const postsWithUsers = await Promise.all(
        postData.map(async (post) => {
          const userData = await fetchUser(post.author);
          return {
            ...post,
            user: userData,
          };
        })
      );
      return postsWithUsers;
    } else {
      throw new Error("Failed to fetch post data");
    }
  } catch (error) {
    console.error("Error fetching post data:", error);
    throw error;
  }
};
