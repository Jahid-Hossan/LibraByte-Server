const express = require('express')
const router = express.Router()
const testFol = require("../../apis/testFol/testFol")

router.get('/testFol/v1', testFol)
module.exports = router