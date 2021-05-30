const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

// const ossClient = require('./utils/oss');
// const productData = require('./data/productDetail');

// 跨域问题
// app.use(cors({
//   origin : "http://localhost:3000",
//   credentials: true,
// }));

app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
    secret: 'secret', // 用来对session数据进行加密的字符串.这个属性值为必须指定的属性。
    resave: false, // 是指每次请求都重新设置session cookie，假设你的cookie是6000毫秒过期，每次请求都会再设置6000毫秒。
    saveUninitialized: false, // 是指无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid。
    cookie: {
        maxAge: 1000 * 60 * 3, // Set the effective time of the session, in milliseconds
    },
}));

app.use('/api', require('./app/router'))

const port = '8080'
app.listen(port, function () {
    console.log(`server start at port ${port}`);
});