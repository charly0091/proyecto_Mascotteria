const express = require('express');
const router = express.Router();
const controller = require('../controllers/ventaController');

router.get("/", controller.ventas);
router.get("/marcas/:animal", controller.marcas);
router.get("/productos/:animal/:marca", controller.productos);
router.get("/producto/:id", controller.producto);

module.exports = router;