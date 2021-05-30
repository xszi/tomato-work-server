const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
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

app.use('/api', require('./app/router'))

const port = '8080'
app.listen(port, function() {
  console.log(`server start at port ${port}`);
});
