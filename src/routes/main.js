const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');

/* GET home page. */
router.get('/', controller.index);
router.get("/create", controller.create);
router.get("/venta", controller.ventas);

module.exports = router;