// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();

// app.use('/api', createProxyMiddleware({
//   target: 'http://41.230.48.11:4800',
//   changeOrigin: true,
//   pathRewrite: { '^/api': '' },
//   onProxyRes: function (proxyRes, req, res) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   }
// }));

// app.listen(3000, () => console.log('Proxy running on http://localhost:3000'));
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// Autoriser le CORS (y compris pour les requêtes pré-flight OPTIONS)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // ou 'http://localhost:5173' si tu veux limiter
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204); // Répondre aux requêtes pré-flight
  }
  next();
});

app.use('/api', createProxyMiddleware({
  target: 'http://41.230.48.11:4800',
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
}));

app.listen(3000, () => console.log('Proxy running on http://localhost:3000'));
