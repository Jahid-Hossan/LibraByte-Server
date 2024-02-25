const express = require('express');
const payments = require('../../apis/payment/payment');

const router = express.Router();


router.post('/create-payment-intent/v1', payments)


module.exports = router;