

export const EditAPost = async (name, content, author, postId) => {
  const endpoint = 'http://127.0.0.1:8000/posts/edit/' + postId;



  try {

    const response = await fetch(endpoint, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, content, author })

    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
