/**
 * Service层处理数据路连接和查询，返回数据到Controller层
 */

const Sequelize = require('sequelize');
const UserModel = require('../model/User')
const {
    dataBaseConnectionConfig
} = require('../constants/index')

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
        return await user.findOne({
            where: {
                username: req.body.loginName,
                password: req.body.password
            }
        });
    }

    /**
     * 查询重复登录名
     * @param {Object} data 
     * @returns {Promise}
     */
    async queryUser(req, res) {
        return await user.findOne({
            where: {
                username: req.body.loginName
            }
        });
    }

    /**
     * 注册账号
     * @param {Object} data
     * @return {Promise}
     */
    async regiterAccount(req, res) {
        return await user.create({
            username: req.body.loginName,
            password: req.body.password,
            uid: Math.ceil(Math.random()*100),
        })
    }
}

module.exports = new UserService()