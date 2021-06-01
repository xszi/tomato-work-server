/**
 * 拿到数据库数据的返回，处理后返回最终结果
 */ 
const svgCaptcha = require('svg-captcha');
const UserService = require('../service/user')

class UserController {
    // 设置验证码到session
    async setSvgCaptchaCodeToSession (req, res, next) {
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
        req.session.captcha = cap.text.toLowerCase(); // session 存储验证码数值
        res.type('svg'); // 响应的类型
        res.send(cap.data)
    }
    // 验证登录
    async login(req, res) {
        console.log(req.body.code, req.session, 'controller');
        if (req.body.code !== req.session.captcha) {
            return res.send({code: 1, msg: '验证码不正确'})
        }
        const row = await UserService.findUserByLocal(req, res)
        if (row) {
            res.json({
                status: 'ok',
                content: row,
                msg: '登陆成功'
            });
        } else {
            res.json({
                status: 'error',
                content: null,
                msg: '用户名或密码错误'
            });
        }
    }
}

module.exports = new UserController()