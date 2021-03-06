const express = require('express');
const app = express();

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'kumakuma',
  database : 'database_development'
});

app.get('/', function (req, res) {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  connection.query('select * from scrapings', function (error, results) {
    if (error) throw error;
    res.send(results[0]
);
  });
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
