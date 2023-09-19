

export const EditAPost = async (name, content, author) => {
  const endpoint = 'http://localhost:8000/posts/' + postId;
  const postId = 1;


  try {

    const response = await fetch(endpoint, {
      method: 'PATCH',
      headers: {

        "Content-Type": "application/json",

      },
      body: {
        name, content, author
      }
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
