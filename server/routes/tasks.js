const router = require('express').Router();
const Task = require('../models/Task');

router.post('/add', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    desc: req.body.desc,
    owner: req.body.userId
  });
  try {
    const saved = await task.save();
    res.send(saved);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/all/:userId', async (req, res) => {
  try {
    const list = await Task.find({ owner: req.params.userId });
    res.send(list);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;