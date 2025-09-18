const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Route de test
app.get('/', (req, res) => {
  res.json({ 
    message: 'Backend Express pour Webradio',
    status: 'running',
    timestamp: new Date().toISOString()
  });
});

// Route API de test
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    database: 'MySQL connection (à implémenter)',
    version: '1.0.0'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Backend Express démarré sur le port ${PORT}`);
});