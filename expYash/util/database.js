const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  "expensetrackerproject",
  "root",
  "paruchurisivaprasad",
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
