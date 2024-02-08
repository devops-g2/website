const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

const port = process.env.PORT || 80
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`)
})
