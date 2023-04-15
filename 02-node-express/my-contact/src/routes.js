const { Router } = require('express')
const { index } = require('./app/controllers/ContactController')

// const route = express.Router()
const router = Router()

router.get('/contacts', index)

module.exports = router