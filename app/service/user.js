const Sequelize = require('sequelize');
const path = require('path')
const {
    dataBaseConnectionConfig
} = require('../constants/index')
const UserModel = require('../model/User')

const {
    sckemas,
    loginName,
    password,
    database
} = dataBaseConnectionConfig

const sequelize = new Sequelize(sckemas, loginName, password, database);

const user = UserModel(sequelize, Sequelize.DataTypes)

class UserService {
    /**
     * 账号密码登陆
     * @param {Object} data
     * @return {Promise}
     */

    async findUserByLocal(req, res) {
        // findOne & findAll
        const row = await user.findAll({
            where: {
                username: '1',
            }
        });
        res.json({
            ret: 0,
            status: 'ok',
            content: row
        });
        // res.send(`${row.username} 您已登录`);
        // res.sendFile(path.resolve(__dirname, './index.html'));
        console.log(row, 'service=====row');
    }
}

module.exports = new UserService()