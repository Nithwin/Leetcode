const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again after 15 minutes',
});

app.use(limiter);

app.get('/', (req, res) => {
  res.send('Welcome to the public API!');
});

app.listen(3300, () => {
  console.log('Server running on port 3300');
});









