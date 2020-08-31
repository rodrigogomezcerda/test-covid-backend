const mysql = require('mysql2/promise');

const conexion = async () => {
  return await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  });
};

module.exports = { conexion };
