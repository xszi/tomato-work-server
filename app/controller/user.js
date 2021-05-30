/**
 * 拿到数据库数据的返回，处理后返回最终结果
 */ 

const UserService = require('../service/user')

class UserController {

    async login(req, res) {

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