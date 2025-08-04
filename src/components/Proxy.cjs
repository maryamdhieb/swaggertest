const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Middleware CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://swaggertest1.onrender.com'); // Remplacez '*' par l’URL de votre frontend en production
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://41.230.48.11:4800',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    on: {
      proxyReq: (proxyReq, req, res) => {
        console.log('Requête proxy :', {
          méthode: req.method,
          url: req.url,
          en_têtes: req.headers,
          corps: req.body,
        });
      },
      proxyRes: (proxyRes, req, res) => {
        let body = [];
        proxyRes.on('data', (chunk) => {
          body.push(chunk);
        });
        proxyRes.on('end', () => {
          body = Buffer.concat(body).toString();
          console.log('Réponse backend :', {
            statut: proxyRes.statusCode,
            en_têtes: proxyRes.headers,
            corps: body,
          });
        });
      },
      error: (err, req, res) => {
        console.error('Erreur proxy :', {
          message: err.message,
          code: err.code,
          stack: err.stack,
        });
        res.status(500).json({ erreur: 'Échec de la connexion au backend', détails: err.message });
      },
    },
  })
);

// Endpoint de vérification pour Render
app.get('/health', (req, res) => res.status(200).json({ statut: 'OK' }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Proxy démarré sur le port ${port}`));