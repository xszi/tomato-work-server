/**
 * 定义数据Schema
 */

module.exports = function (sequelize, dataTypes) {
    // 定义User模型
    return sequelize.define('User', {
            id: {
                type: dataTypes.UUID,
                defaultValue: dataTypes.UUIDV4,
                primaryKey: true
            },
            uid: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            provider: {
                type: dataTypes.STRING(10),
                allowNull: false,
                defaultValue: 'github'
            },
            login_name: {
                type: dataTypes.STRING(50),
                allowNull: false,
                defaultValue: ''
            },
            username: {
                type: dataTypes.STRING(50),
                allowNull: false,
                defaultValue: ''
            },
            password: {
                type: dataTypes.STRING(32),
                allowNull: false,
                defaultValue: ''
            },
            token: {
                type: dataTypes.STRING,
                allowNull: false,
                defaultValue: ''
            },
            avatar_url: {
                type: dataTypes.STRING,
                allowNull: false,
                defaultValue: ''
            },
            location: {
                type: dataTypes.STRING,
                allowNull: false,
                defaultValue: ''
            },
            bio: {
                type: dataTypes.STRING,
                allowNull: false,
                defaultValue: ''
            },
            email: {
                type: dataTypes.STRING(50),
                allowNull: false,
                defaultValue: '',
            },
            ip_addr: {
                type: dataTypes.STRING(20),
                allowNull: false,
                defaultValue: '',
                validate: {
                    isIP: true
                }
            },
            role: {
                type: dataTypes.TINYINT(1),
                allowNull: false,
                defaultValue: 1,
                comment: '权限: 0=超级管理员(只能有一个), 1=普通用户'
            }
        },
        // {
        //     underscored: true, //驼峰
        //     charset: 'utf8mb4',
        //     engine: 'InnoDB'
        // }, 
        {
            sequelize
        });
};
