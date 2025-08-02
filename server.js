const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

console.log("==> Initialisation du serveur...");

const app = express();

app.use('/api', createProxyMiddleware({
  target: 'http://41.230.48.11:4800',
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
  onProxyRes: function (proxyRes, req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
}));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  console.log(`==> Route non trouvée : ${req.url}`);
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur le port ${PORT}`);
});
