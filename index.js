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

// Rutas
const noteRoute = require('./routes/noteRoute')
app.use('/api', noteRoute)

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT)
})