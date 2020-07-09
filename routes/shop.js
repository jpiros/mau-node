const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send(`<h1>The Best Things In Life Start With Mau</h1>`);
});

module.exports = router;