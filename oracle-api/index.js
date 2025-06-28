const express = require('express');
const oracledb = require('oracledb');
const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  try {
    const connection = await oracledb.getConnection({
      user: "system",
      password: "oracle",
      connectString: "host.docker.internal:1521/XEPDB1"
    });
    const result = await connection.execute(`SELECT 'Hello Oracle' FROM dual`);
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Oracle API running on port ${PORT}`);
});
