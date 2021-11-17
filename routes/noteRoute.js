const express = require('express')
const noteController = require('../controllers/noteController')

const api = express.Router()

api.get('/notes', noteController.listar)
api.post('/notes', noteController.guardar)
api.get('/notes/:id', noteController.listarId)
api.put('/notes/:id', noteController.editar)
api.delete('/notes/:id', noteController.borrar)

module.exports = api