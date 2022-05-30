const express = require('express');
const app = express();
const DBActions = require("./DBActions");

app.get
// var cors = require('cors')
// app.use(cors());

app.get('/test', (req, res) => {
    let results = DBActions.getUnits();
    res.json(results);
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


// example www.localhost:5000/orders/5/
app.get('/orders/:customerId/:tester/:carsten', (req, res) => {
    // let custid = req.params.customerId; // the request object can contain many parameters.

    let { carsten, customerId, tester } = req.params; // you can extract all the params you want in a single line like this. The variables given in the { } braces MUST match the actual parameter in request.

    // let {customer} = req.params; // This wont work as the req.params does not contain a "customer" key/value
    // let results = DBActions.getOrders(custid);
    res.json({ customerId: customerId, tester: tester, carsten: carsten });
})


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