const express = require('express');
const router = express.Router();
const inquiryController = require('../controllers/inquiry.controller');


router.post('/', inquiryController.submitInquiry);

module.exports = router;
