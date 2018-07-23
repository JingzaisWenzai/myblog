var sqlMap = {
  getArticles: 'SELECT * FROM test',
  getArticleDetail: 'SELECT * FROM test WHERE id = ?',
  setValue: 'UPDATE test SET name = ? WHERE id = ?'
}

module.exports = sqlMap;