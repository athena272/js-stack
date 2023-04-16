const { Router } = require('express')
const ContactController = require('./app/controllers/ContactController')
// const { index } = require('./app/controllers/ContactController')

// const route = express.Router()
const router = Router()

router.get('/contacts', ContactController.index)
router.get('/contacts/:id', ContactController.show)
router.delete('/contacts/:id', ContactController.delete)

module.exports = router