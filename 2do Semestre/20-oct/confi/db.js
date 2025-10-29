import mysql from 'mysql2/promise'; 

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'basededatod'
});