var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets.js');

router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;