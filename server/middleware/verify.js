const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('auth');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.KEY);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};

const checkRole = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).send('Not Authorized');
  }
  next();
};

module.exports = { auth, checkRole };