const express = require('express')
const cors = require('cors')

const { messagesGenerator } = require('./randomMessagesGenerator')

const app = express()
app.use(cors())

const messagesAmount = process.env.npm_config_amount || 1000
const port = process.env.PORT || 5000

const messages = messagesGenerator(messagesAmount)

app.get('/api/messages', function (req, res) {
  res.send(messages)
})


app.get('/api/messages/:id', function (req, res) {
  const id = +req.params.id
  const message = messages.find((m) => m.id === id)
  if (!message) {
    res.status(404).send('Message not found')
  }
  res.send(message)
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
