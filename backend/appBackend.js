const express = require('express')
const cors = require('cors')

const { messagesGenerator } = require('./randomMessagesGenerator')

const app = express()
app.use(cors())

const port = process.env.PORT || 5000

console.log(process)

const messages = messagesGenerator(10000)

app.get('/api/messages', function (req, res) {
  res.send(messages)
  // res.send(messages.map(({ message, ...rest }) => ({ ...rest })))
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
