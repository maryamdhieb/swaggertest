const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');


const app = express();



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
