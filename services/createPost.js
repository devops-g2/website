export const handleAddPost = async (postTitle, postContent, author) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: postTitle,
        content: postContent,
        author: author,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
