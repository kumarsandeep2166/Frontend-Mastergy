const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/images', {
      target:
        'http://ec2-13-232-179-205.ap-south-1.compute.amazonaws.com/pilot',
    })
  );
  app.use(
    createProxyMiddleware('/pilot', {
      target: 'http://ec2-13-232-179-205.ap-south-1.compute.amazonaws.com/',
    })
  );
};
