import { createProxyMiddleware } from 'http-proxy-middleware';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

module.exports = function(app: any){
    app.use(
      "/api",
      createProxyMiddleware( {
        target: apiBaseUrl,
        changeOrigin: true
      })
    )
};