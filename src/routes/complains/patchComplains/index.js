const express = require ('express')
const router = express.Router()
const patchComplains = require('../../../apis/complains/patchComplains/patchComplains')

router.patch('/updateComplains/v1/:id', patchComplains)

module.exports = router;