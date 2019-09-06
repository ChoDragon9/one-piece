const express = require('express')
const app = express()

app.use('/static', express.static('static'))
app.use('/src', express.static('src'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
