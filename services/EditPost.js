export const EditAPost = async (postTitle, postContent, author, postId) => {
  const endpoint = 'http://127.0.0.1:8000/posts/' + postId

  try {
    const response = await fetch(endpoint, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: postTitle,
        content: postContent,
        author: author,
        postId: postId,
      }),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}
