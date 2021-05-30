// 处理数据库数据的返回

// 获取
const path = require('path')
const UserService = require('../service/user')

class UserController {


    async login(req, res) {
        // const { loginToken } = req.cookies;
        // if (!loginToken) {
        //   return res.sendFile(path.resolve(__dirname, './index.html'));
        // }

        console.log(req.body, 22222555555);
        const findUserByLocal = UserService.findUserByLocal(req, res)
    }
}

module.exports = new UserController()