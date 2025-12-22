const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.pass, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    pass: hash,
    org: req.body.org
  });

  try {
    const saved = await user.save();
    res.send(saved);
  } catch (err) {
    res.status(400).send(err);
  }
});
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Wrong Email');

  const validPass = await bcrypt.compare(req.body.pass, user.pass);
  if (!validPass) return res.status(400).send('Wrong Pass');

  const token = jwt.sign({ id: user._id }, process.env.KEY);
  res.header('auth', token).send(token);
});
module.exports = router;