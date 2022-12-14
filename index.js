const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/check', (req, res) => {
  res.json({message: "this is checkout page"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})