import mysql from 'mysql'

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "9Oqvjgm3",
//     database: "posilkoved",
// }) 

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "posilkoved",
}) 

export default db
