const router = require('express').Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    pass: req.body.pass,
    org: req.body.org
  });

  try {
    const saved = await user.save();
    res.send(saved);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;