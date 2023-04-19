const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.multiavatar.com/4645646',
      changeOrigin: true,
    })
  );
};
