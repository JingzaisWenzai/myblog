(function (window) {
  var configs = {
    'development': {
      apiRoot: 'http://localhost:8088/'
    },
    'production': {
      apiRoot: 'http://www.whispershirley.cn:8088/'
    }
  }
  var env = (function () {
    var host = location.host;
    if (/localhost/ig.test(host)) {
      return configs.development
    } else if (/dev\./ig.test(host)) {
      return configs.development
    } else {
      return configs.development
    }
  })()
  var baseUrl = window.location.protocol + '//' + window.location.host

  window._ENV = {
    apiRoot: env.apiRoot
  }
})(this)
