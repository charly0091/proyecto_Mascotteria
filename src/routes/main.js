const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');

/* GET home page. */
router.get('/', controller.index);
router.get("/create", controller.create);
module.exports = router;