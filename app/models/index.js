const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
console.log({
  HOST: dbConfig.HOST,
  DB: dbConfig.DB,
  USER: dbConfig.USER,
  PORT: dbConfig.port
});
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
