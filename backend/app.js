const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

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

app.get('/api/sad-song', async (req, res) => {
  try {
    const [moodRows] = await db.query("SELECT id_MOOD FROM MOOD WHERE name_MOOD = 'triste' LIMIT 1");
    if (!moodRows.length) {
      return res.status(404).json({ message: "Mood 'triste' non trouvé." });
    }
    const sadMoodId = moodRows[0].id_MOOD;
    const [trackRows] = await db.query(
      "SELECT * FROM TRACK WHERE mood_id = ? ORDER BY RAND() LIMIT 1",
      [sadMoodId]
    );
    if (trackRows.length > 0) {
      res.json(trackRows[0]);
    } else {
      res.status(404).json({ message: "Aucune chanson triste trouvée." });
    }
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur", details: err.message });
  }
});