const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
  const proxy = createProxyMiddleware({ target: "http://localhost:3050" });
  app.use("/auth", proxy);
  app.use("/api", proxy);
};
