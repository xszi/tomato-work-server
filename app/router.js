const express = require('express');
const svgCaptcha = require('svg-captcha');
const router = express.Router()

const UserController = require('./controller/user')

router.post('/login', UserController.login)

router.get('/captcha', function (req, res) {
    console.log(req.query.code, 'req');

    const cap = svgCaptcha.create({
        // 翻转颜色
        inverse: false,
        // 字体大小
        fontSize: 36,
        // 噪声线条数
        noise: 3,
        // 宽度
        width: 80,
        // 高度
        height: 30,
    });
    req.session.captcha = cap.text; // session 存储验证码数值
    console.log(req.session)
    res.type('svg'); // 响应的类型
    res.send(cap.data)
})

module.exports = router;