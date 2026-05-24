const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventory_system'
});

db.connect((err) => {
    if(err) {
        console.log('Database Error');
        console.log(err);
    } else {
        console.log('MySQL Connected');
    }
});

app.get('/products', (req, res) => {

    const sql = 'SELECT * FROM products';

    db.query(sql, (err, result) => {
        if(err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

app.post('/products', (req, res) => {

    const { product_name, category, price, stock, supplier } = req.body;

    const sql = `
        INSERT INTO products
        (product_name, category, price, stock, supplier)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [product_name, category, price, stock, supplier],
        (err, result) => {
            if(err) {
                res.send(err);
            } else {
                res.json({message: 'Product Added Successfully'});
            }
        }
    );
});

app.delete('/products/:id', (req, res) => {

    const id = req.params.id;

    const sql = 'DELETE FROM products WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Product Deleted' });
        }
    });
});

app.listen(5000, () => {
    console.log('Server Running On Port 5000');
});