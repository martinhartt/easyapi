import Express from 'express';
import bodyParser from 'body-parser';
import passport from './config/passport';
import index from './routes/index';
import auth from './routes/auth';
import service from './routes/service';
import model from './routes/model';
import entry from './routes/entry';
import attribute from './routes/attribute';
import value from './routes/value';
import api from './routes/api';
import bootstrap from './config/bootstrap';
import models from './models';
import authentication from './middleware/authentication';


bootstrap().then(async () => {
  /* eslint-disable new-cap */
  const app = Express();
  const port = 9001;

  await models.sequelize.sync();

  app.use(bodyParser.json());

  app.use(passport.initialize());
  app.use(authentication);

  app.use('/api', index);
  app.use('/api/service', service);
  app.use('/api/auth', auth);
  app.use('/api/model', model);
  app.use('/api/attribute', attribute);
  app.use('/api/entry', entry);
  app.use('/api/value', value);
  app.use('/api/api/', api);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found!');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use((err, req, res) => {
    // set locals, only providing error in development
    /* eslint-disable no-param-reassign */
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  app.listen(port);
  console.log(`Server is running on port ${port}`);
})
.catch(err => console.error(err));
