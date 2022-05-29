const express = require('express')
const app = express()
const mysql = require('mysql')
// const mariadb = require('mariadb');
 
// Create a connection pool
// var pool = mariadb.createPool({
//     host: "tpmdata.dk.mysql", 
//     port: 3306,
//     user: "tpmdata_dkfreezerinventory", 
//     password: "Legolas01!",
//     database: "freezerinventory"
//   });
 
// var cors = require('cors')

// app.use(cors());

// if needed check https://documentation.alphasoftware.com/pages/GettingStarted/GettingStartedTutorials/Basic%20Tutorials/Northwind/northwindMySQL.xml
const connection = mysql.createConnection({
    host: '192.168.2.200',
    user: 'Patrick',
    password: 'Figaro007',
    database: 'fryser'
});

app.get('/test', (req, res) => {
    connection.query('select * from ENHEDER', (err, results) => {
        if (err) {
            console.log(err);
        }
        res.json(results);
    })
})

// app.get('/users', (req, res) => {
//     connection.query('select * from customers', (err, results) => {
//         if (err) {
//             console.log(err);
//         }
//         res.json(results);
//     })
// })


// app.get('/categories', (req, res) => {
//     connection.query('select * from categories', (err, results) => {
//         if (err) {
//             console.log(err);
//         }
//         res.json(results);
//     })
// })

// app.get('/orders/:customerId', (req, res) => {
//     let custid = req.params.customerId;
//     let sqlString = 'select * from orders where `CustomerID` = "' + custid + '"'
//     connection.query(sqlString, (err, results) => {
//         if (err) {
//             console.log(err);
//         }
//         res.json(results);
//     })
// })


// // rename table in database from order detals -> order_details
// app.get('/order/:orderId', (req, res) => {
//     let orderId = req.params.orderId;
//     let sqlString = 'SELECT order_details.quantity, order_details.UnitPrice, products.ProductName, order_details.Discount FROM order_details INNER JOIN products ON order_details.ProductID = products.ProductID WHERE `OrderID` = "' + orderId + '"'
//     connection.query(sqlString, (err, results) => {
//         if (err) {
//             console.log(err);
//         }
//         res.json(results);
//     })
// })


app.listen(5000, console.log("Listening on port 5000"))