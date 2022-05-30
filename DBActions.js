const mysql = require('mysql');


const connection = mysql.createConnection({
    host: '192.168.2.200',
    user: 'Patrick',
    password: 'Figaro007',
    database: 'fryser'
});

function getUnits() {
    let results = [1, 2, 3, 4];
    // connection.query('select * from UNITS', (err, results) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     return results;
    //     // res.json(results);
    // })
    return results;

}

function getOrders(customerID) {
    let sqlString = 'select * from orders where `CustomerID` = "' + customerID + '"'
    connection.query(sqlString, (err, results) => {
        if (err) {
            console.log(err);
        }
        return (results);
    })
}

module.exports = {
    getUnits,
    getOrders,
}
