const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');
const axios = require('axios');
const sign = require('./sign.js');

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true    // 多语句查询
});
var appId = 'wx0f25e1b84bb40a28'
var appsecret = '99774bff74b3c606b738b09ae1c471fe'
console.log('链接数据库')
module.exports = {
  getArticles(req, res, next) {
    var query = req.query
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getArticles + ' LIMIT ' + query.offset + ',' + query.limit;
      connection.query(sql, (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  getArticleDetail(req, res, next) {
    var id = req.params.id;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getArticleDetail;
      connection.query(sql, [id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  getAccessToken (req, res, next) {
    let config = {
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: appId, // 必填，公众号的唯一标识
      timestamp: '', // 必填，生成签名的时间戳
      nonceStr: '', // 必填，生成签名的随机串
      signature: '',// 必填，签名，见附录1
      jsApiList: ['chooseImage', 'getLocation', 'openLocation', 'scanQRCode', 'hideMenuItems', 'showMenuItems', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    };
    let url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appId + '&secret=' + appsecret
    axios.get(url).then(token => {
      let access_token = token.data.access_token
      axios.get('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + access_token + '&type=jsapi').then(jsapi => {
        let c = sign(jsapi.data.ticket, req.body.url)
        config.timestamp = c.timestamp
        config.nonceStr = c.nonceStr
        config.signature = c.signature
        res.json({data: config, msg: '获取微信JS-SDK配置成功', code: 200})
      })
      // res.json(rsp.data);
    })
  }
}