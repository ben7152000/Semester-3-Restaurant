// modules
const express = require('express')
const router = express.Router()

// controller
const { getAllRestaurant } = require('../controllers/restaurant_controller')

router.get('/', getAllRestaurant)

module.exports = router