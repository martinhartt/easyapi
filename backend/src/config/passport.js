import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import models from '../models';
import jwt from 'jsonwebtoken';

const { User } = models;

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: true,
}, (req, username, password, done) => User.findOne({
  where: {
    username,
  },
})
    .then(async (foundUser) => {
      let user;
      if (foundUser) {
        // User exists
        if (!(await foundUser.validPassword(password))) {
          return done(null, false, {
            message: 'Incorrect password.',
          });
        }
        user = foundUser;
      } else {
        // New user
        user = await User.create({
          username,
          passwordHash: User.generateHash(password),
        });
      }

      const payload = {
        user: user.id,
      };

      const token = jwt.sign(payload, 'secret');

      return done(null, {
        user: {
          username: user.username,
        },
        token,
      });
    })
    .catch(err => done(err)),
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.find({
    where: { id },
  }, (err, [user]) => {
    done(err, user);
  });
});

export default passport;
