const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

// Proxy /api vers le vrai backend
app.use('/api', createProxyMiddleware({
  target: 'http://41.230.48.11:4800',
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
  onProxyRes: function (proxyRes, req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://swaggertelesys.onrender.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }
}));

// Servir le build React
app.use(express.static(path.join(__dirname, 'dist')));
