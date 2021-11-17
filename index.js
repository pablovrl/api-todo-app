const mongoose = require('mongoose')
const express = require('express')
const app = express()

require('dotenv').config()

app.use(express.json())

const Note = require('./models/Note')

mongoose.connect(process.env.MONGODB_URI, (err) => {
  if(err) throw err
  console.log("DB Connected Succesfully")
})

app.get('/', (req, res) => {
  Note.find({}).then((note) => {
    res.json(note)
  })
})

app.post('/', (req, res) => {

  const note = req.body

  const newNote = new Note({
    content: note.content,
    important: note.important
  })

  newNote.save()
  .then((note) => {
    res.json(note)
  }).catch((err) => {
    console.error(err)
  })
})

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT)
})