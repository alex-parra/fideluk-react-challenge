require('dotenv').config();
const fetch = require('isomorphic-unfetch');
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.SERVER_PORT;
const API_BASE = process.env.FIDEL_API_BASE;
const API_KEY = process.env.FIDEL_API_KEY;

const defaultHeaders = {
  'Content-Type': 'application/json',
  'fidel-key': API_KEY,
};

app.use(cors());
app.use(express.json());

app.use('/', async (req, res) => {
  const options = {
    method: req.method,
    headers: { ...defaultHeaders },
  };

  try {
    const resp = await fetch(API_BASE + req.url, options);
    const data = await resp.json();
    if (!resp.ok) throw new Error('Request failed: ' + JSON.stringify(data));
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => {
  console.info('Express listening on port ' + PORT);
});
