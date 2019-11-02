const express = require('express')
const router = express.Router()

const controller = require('../controllers/filmesController')

router.get('/', controller.get)
router.get('/:diretor', controller.getDiretor)
router.get('/genre/:genero', controller.getGenero)
router.post('/', controller.post)


module.exports = router