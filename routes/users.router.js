const express = require('express');

const router = express.Router();

router.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    return res.json({
      limit,
      offset,
    });
  }

  res.send('No hay parámetros');
});

module.exports = router;
