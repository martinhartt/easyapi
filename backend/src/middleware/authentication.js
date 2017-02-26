import jwt from 'jsonwebtoken';
import User from '../models';

export default function(req, res, next) {
  if (req.originalUrl.startsWith('/api/auth/')) {
    return next();
  }

  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  const token = req.headers.authentication.split(' ')[1];

  return jwt.verify(token, 'secret', (err, decoded) => {
    if (err) return res.status(401).end();

    const userId = decoded.id;

    return User.findById(userId)
      .then(user => user && res.next())
      .then(err => res.status(401).end());
  });
};
