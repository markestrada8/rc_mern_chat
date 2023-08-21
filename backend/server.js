const express = require('express')
const data = require('./data/data')
const dotenv = require('dotenv').config()
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.json("rc_mern_chat")
})

app.get('/api/data', (req, res) => {
  res.json(data.chats)
})

app.get('/api/data/:id', (req, res) => {

  res.json(data.chats.find(item => item._id === req.params.id))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})