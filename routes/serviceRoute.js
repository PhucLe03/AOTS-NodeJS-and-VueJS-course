const express = require('express')
const serviceCtl = require('../controllers/serviceController')

const router = express.Router()
router.get('/services', serviceCtl.getAllServices)
router.get('/service/:id', serviceCtl.getServiceById)
router.post('/service', serviceCtl.createService)
router.put('/service/:id', serviceCtl.updateService)
router.delete('/service/:id', serviceCtl.deleteService)

router.patch;
router.options;

module.exports = router