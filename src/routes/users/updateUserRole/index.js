const express = require('express')
const router = express.Router()

const patchUserRole = require('../../../apis/users/patchUserRole/patchUserRole')

router.patch('/userRole/v1/:id', patchUserRole)

module.exports = router