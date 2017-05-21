import jwt from 'jsonwebtoken';
import models from '../models';

const { User } = models;

export default function (req, res, next) {
  if (req.originalUrl.startsWith('/api/auth/login')) {
    return next();
  }
  if (req.originalUrl.startsWith('/api/api')) {
    return next();
  }

  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  const token = req.headers.authorization.split(' ')[1];
  return jwt.verify(token, 'secret', (err, decoded) => {
    if (err) return res.status(401).end();

    const userId = decoded.user;

    return User.findById(userId)
      .then((user) => {
        if (user) {
          req.user = user;
          return next();
        }
        return res.status(401).end();
      })
      .catch(() => res.status(401).end());
  });
}
