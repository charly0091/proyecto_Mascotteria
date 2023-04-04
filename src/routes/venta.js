const express = require('express');
const router = express.Router();
const controller = require('../controllers/ventaController');

router.get("/", controller.ventas);
router.get("/marcas/:animal", controller.marcas);
router.get("/productos/:animal/:marca", controller.productos);
router.get("/producto/:id", controller.producto);
router.post("/carrito", controller.carrito);
router.post("/comprar", controller.comprar);
router.delete("/eliminar/:id", controller.delete);

module.exports = router;