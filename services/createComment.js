import { fetchUser } from './fetchUser'

export const handleCreateComment = async (
  postId,
  commentContent,
  loggedInUserId,
) => {
  try {
    const loggedInUserData = await fetchUser(loggedInUserId)

    if (!loggedInUserData) {
      throw new Error('Failed to fetch user data for the logged-in user')
    }
    console.log(loggedInUserData.id)

    const response = await fetch('http://127.0.0.1:8000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post_id: postId,
        content: commentContent,
        author: loggedInUserData.id,
      }),
    })

    if (response.ok) {
      const commentData = await response.json()
      return commentData
    } else {
      throw new Error('Failed to create a comment')
    }
  } catch (error) {
    console.error('Error creating a comment:', error)
    throw error
  }
}
