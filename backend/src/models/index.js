import Sequelize from 'sequelize';
import connections from '../config/connections';

import attribute from './attribute';
import entry from './entry';
import model from './model';
import service from './service';
import user from './user';
import value from './value';

const env = process.env.NODE_ENV || 'development';
const db = {};

const config = connections[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const models = {
  attribute,
  entry,
  model,
  service,
  user,
  value,
};

const capitalizeString = str => str.charAt(0).toUpperCase() + str.slice(1);

for (const modelName in models) {
  if (!models.hasOwnProperty(modelName)) continue;

  db[capitalizeString(modelName)] = models[modelName](sequelize, Sequelize);
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
