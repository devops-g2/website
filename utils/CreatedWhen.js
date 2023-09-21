export const convertCreatedAtToDays = (createdAt) => {
  const postDate = new Date(createdAt)
  const currentDate = new Date()
  const timeDifference = currentDate - postDate
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  if (daysDifference === 0) {
    return 'today'
  } else if (daysDifference === 1) {
    return 'yesterday'
  } else {
    return `${daysDifference} days ago`
  }
}
