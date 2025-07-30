require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');

app.use(cors());
app.use(bodyparser.json());

// Railway DB connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error('Connection failed:', err.message);
    } else {
        console.log('Database connected to Railway');
    }
});

// GET routes
app.get('/data/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM question1 WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(result);
    });
});

app.get('/data2/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM question2 WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(result);
    });
});

app.get('/data3/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM question3 WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(result);
    });
});

app.get('/data4/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM question4 WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(result);
    });
});

app.get('/data5/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM question5 WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(result);
    });
});

app.get('/data6/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM question6 WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(result);
    });
});

app.get('/login/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT id FROM credentials WHERE username = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(result);
    });
});

// PUT routes for gate updates
for (let i = 1; i <= 6; i++) {
    app.put(`/edit${i}/:id`, (req, res) => {
        const { id } = req.params;
        const gateValue = req.body[`gate${i}`];
        const q = `UPDATE score SET gate${i} = ? WHERE id = ?`;
        db.query(q, [gateValue, id], (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json(result);
        });
    });

    app.get(`/scoreget${i}/:id`, (req, res) => {
        const { id } = req.params;
        const q = `SELECT gate${i} FROM score WHERE id = ?`;
        db.query(q, [id], (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).json(result);
        });
    });
}

// Stats and reset routes
app.get('/stats/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM score WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(result);
    });
});

app.put('/reset/:id', (req, res) => {
    const { id } = req.params;
    const q = 'UPDATE score SET gate1=0, gate2=0, gate3=0, gate4=0, gate5=0, gate6=0 WHERE id = ?';
    db.query(q, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(result);
    });
});

app.get('/percent/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT average FROM score WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(result);
    });
});

app.get('/ranks', (req, res) => {
    db.query('SELECT user, sum FROM score ORDER BY sum DESC', (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(result);
    });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
