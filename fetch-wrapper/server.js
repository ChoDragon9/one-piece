const express = require('express')
const app = express()

app.use('/static', express.static('static'))
app.use('/source', express.static('./'))

// - Blob
// - Arraybuffer
// - formData

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/get/json', (req, res) => {
  res.send({
    message: 'Hi'
  })
})
app.get('/get/html', (req, res) => {
  res.send('<div></div>')
})
app.get('/get/text', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
