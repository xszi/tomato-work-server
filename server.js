const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const svgCaptcha = require('svg-captcha');
const session = require('express-session');
const app = express();

// const ossClient = require('./utils/oss');
// const productData = require('./data/productDetail');



app.use(session({
    secret: '12345', // 用来对session数据进行加密的字符串.这个属性值为必须指定的属性。
    resave: false, // 是指每次请求都重新设置session cookie，假设你的cookie是6000毫秒过期，每次请求都会再设置6000毫秒。
    saveUninitialized: true, // 是指无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid。
    cookie: {
        secure: true,
        maxAge: 1000 * 60 * 3, // cookie过期时间，毫秒。
    },
}));


app.use(bodyParser.json());
app.use(cookieParser());

// 跨域问题
// app.use(cors({
//     origin: "http://localhost:7000",
//     credentials: true,
// }));

app.get('/api/captcha', function (req, res) {
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
    console.log(req.session.captcha, 'ddddd');
    res.type('svg'); // 响应的类型
    res.send(cap.data)
})

app.use('/api', require('./app/router'))

const port = '8080'
app.listen(port, function () {
    console.log(`server start at port ${port}`);
});