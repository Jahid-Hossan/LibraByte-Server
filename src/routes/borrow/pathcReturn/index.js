const express = require('express')
const router = express.Router()
const patchReturn = require('../../../apis/borrowBooks/patchReturn/patchReturn')

router.patch('/returnedStatus/v1/:id', patchReturn)

module.exports = router