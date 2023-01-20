require('dotenv').config();

const Sequelize = require('sequelize');

//JawsDB is a MySQL/MariaDB Database-as-a-Service (DBaaS) provider supplying a fully functional, fully managed, relational database for use with an application
// (if t or f) ?  (true acttion)action : (false)action
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;