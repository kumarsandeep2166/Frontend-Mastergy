const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/images", {
      target: "http://api.mastergy.in/pilot",
    })
  );
  app.use(
    createProxyMiddleware("/pilot", { target: "http://api.mastergy.in" })
  );
};
