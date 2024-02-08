const express = require ('express')
const router = express.Router()
const patchDeliver = require('../../../apis/borrowBooks/patchDeliver/patchDeliver')

router.patch('/updateDeliver/v1/:id', patchDeliver)

module.exports = router