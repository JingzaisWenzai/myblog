import axios from 'axios'

let api = axios.create({
  baseURL: window._ENV.apiRoot
})

export default {
  getArticles (query) {
    return api.get('/api/getArticles', { params: query })
  },
  getArticleDetail (id) {
    return api.get('/api/getArticles/' + id)
  },
  setValue (model) {
    return api.post('/api/setValue', model)
  }
}
