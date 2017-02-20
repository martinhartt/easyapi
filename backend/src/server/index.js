import Express from 'express';
import bodyParser from 'body-parser';
import index from './routes/index';
import service from './routes/service';
import bootstrap from './config/bootstrap';
import models from './models';

bootstrap().then(async () => {
  /* eslint-disable new-cap */
  const app = Express();
  const port = 9001;

  await models.sequelize.sync();

  app.use(bodyParser.json());

  app.use('/api', index);
  app.use('/api/service', service);

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
