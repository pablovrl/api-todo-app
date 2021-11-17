const Note = require('../models/Note')

const guardar = (req, res) => { 
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
}

const listar = (req, res) => {
  Note.find({}).then((note) => {
    res.json(note)
  })
}

const listarId = (req, res) => {
  const id = req.params.id

  Note.findById(id)
  .then((note) => {
    res.json(note)
  })
}

const borrar = (req, res) => {
  const id = req.params.id

  Note.findByIdAndDelete(id)
  .then((note) => { 
    res.json({deleted: note})
  })
}

const editar = (req, res) => {
  const id = req.params.id

  Note.findByIdAndUpdate(id, req.body, {new: true})
  .then((note) => {
    res.json({note})
  })
}

module.exports = {
  guardar,
  listar,
  listarId,
  borrar,
  editar
}