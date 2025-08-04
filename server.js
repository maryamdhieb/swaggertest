const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

// Autoriser les requêtes CORS depuis Swagger React Render
app.use(cors({
  origin: '*', // Ou restreint à ton frontend Render
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Proxy des appels vers l'API Telesys
app.use('/api', createProxyMiddleware({
  target: 'http://41.230.48.11:4800',
  changeOrigin: true,
  pathRewrite: { '^/api': '' }
}));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Proxy serveur démarré sur le port ${PORT}`);
});
