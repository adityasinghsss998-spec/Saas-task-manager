const router = require('express').Router();
const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.pass, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    pass: hash,
    org: req.body.org,
    role: req.body.role || 'Developer'
  });

  try {
    const saved = await user.save();
    res.send(saved);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router; 