const express = require('express')
const router = express.Router()

//middlewares
const protectRoute = require('../middlewares/protectRoute');

//controllers
const status = require('../controllers/status')

//routes
router.get('/', status.info)
router.get('/faq/', protectRoute, status.info)

module.exports = router