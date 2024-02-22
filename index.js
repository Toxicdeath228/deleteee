const mysql = require("mysql2")
const express = require('express')
const app = express()
const port = 3000


const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "serviceStation",
    password: ""
});


app.delete('/Auto/:id', function (req, res) {
    pool.query("DELETE FROM `Auto` WHERE `id`=" + req.params.id, (err, data) => {
        if(err) return  console.log(err);
        res.json( {
            Auto: data
        });
    });
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })