const express = require('express')
const router = express.Router()

const userData = require('../../../apis/users/deleteUser/deleteUser')

router.delete('/userDelete/v1/:id', userData)

module.exports = router