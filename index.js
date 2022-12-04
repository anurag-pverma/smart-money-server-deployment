const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.json({message: 'Hello World!'})
})
app.get('/hello', (req, res) => {
  res.json({message: 'This is my text page'})
})



app.listen(process.env.PORT|| 4000, () => {
  console.log(`Example app listening on port`)
})