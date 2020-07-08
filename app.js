const express = require('express');

const app = express();

app.use('/', (req, res, next) => {;
  console.log('gmml');
  next();
});

app.use('/ims', (req, res, next) => {;
  res.send(`<h1>ims</h1>`);
});

app.use('/', (req, res, next) => {
  res.send(`<h1>The Best Things In Life Start With Mau</h1>`);
});

app.listen(7505);
