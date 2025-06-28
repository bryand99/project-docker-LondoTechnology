const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

const browserFolder = path.join(__dirname, '../browser');
app.use(express.static(browserFolder));

app.get('*', (req, res) => {
  res.sendFile(path.join(browserFolder, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Angular SSR server running on http://localhost:${PORT}`);
});

