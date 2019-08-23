var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'fec'
})

connection.connect()

module.exports = connection