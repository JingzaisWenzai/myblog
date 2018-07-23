const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true    // 多语句查询
});
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
  }
}