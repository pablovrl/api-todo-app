const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
  content: String,
  important: Boolean
})

module.exports = mongoose.model('Note', noteSchema)