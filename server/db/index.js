const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'database',
  user: 'root',
  database: 'fec',
});

connection.connect();

module.exports = connection;
