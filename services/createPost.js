export const handleAddPost = async (postTitle, postContent, author) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: postTitle,
        content: postContent,
        author: author,
      }),
    })
    const data = await response.json()
    const postId = data.id
    return postId
  } catch (error) {
    console.log(error)
  }
}

export const handleAddTag = async (tagName) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/tags', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: tagName,
      }),
    })
    const data = await response.json()
    const id = data.id
    if (id) {
      const tagId = id
      console.log('tagId', tagId)
      return tagId
    } else {
      console.error('Failed to create tag:', tagName)
      console.error(error)
      return null
    }
  } catch (error) {
    console.error(error)
    return null
  }
}

export const handleTagAndPost = async (tagId, postId) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/tagged_posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tag_id: tagId,
        post_id: postId,
      }),
    })
    const data = await response.json()
    console.log('this is tagged_post', data)
  } catch (error) {
    console.error(error)
  }
}