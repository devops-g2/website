export const editAPost = async (postTitle, postContent, author, postId) => {
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

    if (response.ok) {
      return { success: true, message: 'changesSaved' }
    } else {
      return { success: false, message: 'unkonwErrorException' }
    }
  } catch (error) {
    console.error(error)
  }
}
