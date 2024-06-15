const express = require('express')
const userCtl = require('../controllers/rentController.js')

const router = express.Router()
router.get('/users', userCtl.getAllRents)
router.get('/user/:id', userCtl.getRentById)
router.post('/user', userCtl.createRent)
router.put('/user/:id', userCtl.updateRent)
router.delete('/user/:id', userCtl.deleteRent)

router.patch;
router.options;

module.exports = router