const { createProxyMiddleware } = require('http-proxy-middleware');
const API_URL = process.env.REACT_APP_API_URL;

module.exports = function(app) {
  app.use(
    '/ecosia-frontend-developer/*',
    createProxyMiddleware({
      target: API_URL,
      changeOrigin: true,
    })
  );
};