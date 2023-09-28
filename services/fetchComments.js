export const fetchCommentsByPostId = async (postId) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/comments?post_id=${postId}`,
    )

    if (response.ok) {
      const commentsData = await response.json()
      return commentsData
    } else {
      throw new Error('Failed to fetch comments data')
    }
  } catch (error) {
    console.error('Error fetching comments data:', error)
    throw error
  }
}
