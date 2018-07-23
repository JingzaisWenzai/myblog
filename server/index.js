const routerApi = require('./router');
const bodyParser = require('body-parser'); // post 数据时需要
const express = require('express');
const app = express();
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "http://localhost:9999");
    if (req.method == 'OPTIONS') {
        /*让options请求快速返回*/
        res.send(200);
    }
    else {
        next()
    }
})
app.use(bodyParser.json());

// 后端api路由
app.use('/api', routerApi);

app.listen(8088);
console.log('success listen at port:8088......');