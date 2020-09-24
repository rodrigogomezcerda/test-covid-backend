const mysql = require('mysql2/promise');
const caching_sha2_password = require('mysql2/lib/auth_plugins/caching_sha2_password');

const conexion = async () => {
  return await mysql.createConnection({
    authPlugins: {
      sha256_password: caching_sha2_password({}),
    },
    host: process.env.HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  });
};

module.exports = { conexion };
