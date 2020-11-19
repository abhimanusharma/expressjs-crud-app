const express = require('express');
const router = express.Router();

//url router import
const clientRouter = require('./clientRouter');
const saleRouter = require('./saleRouter');
const leadRouter = require('./leadRouter');

//route to url router
router.use('/clients', clientRouter);
router.use('/sales', saleRouter);
router.use('/leads', leadRouter);

module.exports = router
