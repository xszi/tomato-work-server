const svgCaptcha = require('svg-captcha');
const express = require('express');
const router = express.Router()

const UserController = require('./controller/user')

router.get('/captcha', UserController.setSvgCaptchaCodeToSession)

router.post('/login', UserController.login)

module.exports = router;