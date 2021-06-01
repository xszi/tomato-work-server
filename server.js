const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    name: 'xszi',
    secret: '123456', // 用来对session数据进行加密的字符串.这个属性值为必须指定的属性。
    resave: false, // 是指每次请求都重新设置session cookie，假设你的cookie是6000毫秒过期，每次请求都会再设置6000毫秒。
    saveUninitialized: false, // 是指无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid。
    cookie: {
        // secure: true, // 千万不能设置这个，这是个坑，设置这个后面session就获取不到设置的值了
        maxAge: 1000 * 60 * 3, // cookie过期时间，毫秒。
    },
}));

app.use('/api', require('./app/router'))

const port = '8080'
app.listen(port, function () {
    console.log(`server start at port ${port}`);
});