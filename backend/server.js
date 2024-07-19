import express from 'express';
import sqlite from 'sqlite3';

const app = express();
const sql = sqlite.verbose();

app.listen(5003, ()=> {
    console.log('server listening');
})

let db = new sql.Database('./mydatabase.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

db.run(`CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    password TEXT,
    email TEXT,
    address TEXT
)`);

app.get('/students', (req, res) => {
    let sql = 'SELECT * FROM students';
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.log('in error')
            throw err;
        }
        console.log(rows);
    });
});

app.post('/users', (req, res) => {
    console.log('in post')
    //const { name, email } = req.body;
    const username = "vardhan";
    const email = "xyz";
    let sql = 'INSERT INTO students (name, email) VALUES (?, ?)';
    db.run(sql, [username, email], function (err) {
        if (err) {
            return console.error(err.message);
        }
        console.log('user added');
        res.json({ id: this.lastID });
    });
});


