const express = require('express');
const app = express();
const port = 3000;

// Définir la route GET /
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});

