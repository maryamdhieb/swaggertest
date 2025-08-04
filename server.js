// server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Proxy vers l'API distante
app.use('/api', createProxyMiddleware({
  target: 'http://41.230.48.11:4800',
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
}));

// Serve ton app React buildée
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
