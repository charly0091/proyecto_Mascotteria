const express = require('express');
const router = express.Router();
const controller = require('../controllers/crudController');

router.get('/create', controller.index);
router.post('/create', controller.create);
router.get('/edit/:id', controller.edit);
router.put('/edit/:id', controller.update);

module.exports = router;

