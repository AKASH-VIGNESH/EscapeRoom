const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');  
app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Akash28@da',
    database: 'escaperoom',
})
db.connect((err) => {
    if (err) {
        console.error('connection failed');
    }
    else {
        console.log('db connected');
    }
})

app.get('/data/:id', (req, res) => {
    const { id } = req.params;
    const q = 'select * from question1 where id=?';
    db.query(q, [id], (err, resu) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.status(200).json(resu);
    })
})

app.get('/data2/:id', (req, res) => {
    const { id } = req.params;
    const q = 'select * from question2 where id=?';
    db.query(q, [id], (err, resu) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.status(200).json(resu);
    })
})

app.get('/data3/:id', (req, res) => {
    const { id } = req.params;
    const q = 'select * from question3 where id=?';
    db.query(q, [id], (err, resu) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.status(200).json(resu);
    })
})

app.get('/data4/:id', (req, res) => {
    const { id } = req.params;
    const q = 'select * from question4 where id=?';
    db.query(q, [id], (err, resu) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.status(200).json(resu);
    })
})

app.get('/data5/:id', (req, res) => {
    const { id } = req.params;
    const q = 'select * from question5 where id=?';
    db.query(q, [id], (err, resu) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.status(200).json(resu);
    })
})

app.get('/data6/:id', (req, res) => {
    const { id } = req.params;
    const q = 'select * from question6 where id=?';
    db.query(q, [id], (err, resu) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.status(200).json(resu);
    })
})

app.get('/login/:id', (req, res) => {
    const { id } = req.params;
    const q = 'select id from credentials where username=?';
    db.query(q, [id], (err, resu) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.status(200).json(resu);
    })
})

app.put('/edit1/:id',(req,res)=>{
    const {id} = req.params;
    const {gate1}= req.body;
    const q = 'update score set gate1=? where id=?';
    db.query(q,[gate1,id],(err,result)=>{
        if(err)
        {
            return res.status(500).json({error:err.message})
        }
        res.status(200).json(result);
    })
})

app.put('/edit2/:id',(req,res)=>{
    const {id} = req.params;
    const {gate2}= req.body;
    const q = 'update score set gate2=? where id=?';
    db.query(q,[gate2,id],(err,result)=>{
        if(err)
        {
            return res.status(500).json({error:err.message})
        }
        res.status(200).json(result);
    })
})

app.put('/edit3/:id',(req,res)=>{
    const {id} = req.params;
    const {gate3}= req.body;
    const q = 'update score set gate3=? where id=?';
    db.query(q,[gate3,id],(err,result)=>{
        if(err)
        {
            return res.status(500).json({error:err.message})
        }
        res.status(200).json(result);
    })
})

app.put('/edit4/:id',(req,res)=>{
    const {id} = req.params;
    const {gate4}= req.body;
    const q = 'update score set gate4=? where id=?';
    db.query(q,[gate4,id],(err,result)=>{
        if(err)
        {
            return res.status(500).json({error:err.message})
        }
        res.status(200).json(result);
    })
})

app.put('/edit5/:id',(req,res)=>{
    const {id} = req.params;
    const {gate5}= req.body;
    const q = 'update score set gate5=? where id=?';
    db.query(q,[gate5,id],(err,result)=>{
        if(err)
        {
            return res.status(500).json({error:err.message})
        }
        res.status(200).json(result);
    })
})

app.put('/edit6/:id',(req,res)=>{
    const {id} = req.params;
    const {gate6}= req.body;
    const q = 'update score set gate6=? where id=?';
    db.query(q,[gate6,id],(err,result)=>{
        if(err)
        {
            return res.status(500).json({error:err.message})
        }
        res.status(200).json(result);
    })
})



app.get('/scoreget1/:id', (req, res) => {
    const { id } = req.params;
    const q = 'select gate1 from score where id=?';
    db.query(q, [id], (err, resu) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.status(200).json(resu);
    })
})

app.get('/scoreget2/:id', (req, res) => {
    const { id } = req.params;
    const q = 'select gate2 from score where id=?';
    db.query(q, [id], (err, resu) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.status(200).json(resu);
    })
})

app.get('/scoreget3/:id', (req, res) => {
    const { id } = req.params;
    const q = 'select gate3 from score where id=?';
    db.query(q, [id], (err, resu) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.status(200).json(resu);
    })
})

app.get('/scoreget4/:id', (req, res) => {
    const { id } = req.params;
    const q = 'select gate4 from score where id=?';
    db.query(q, [id], (err, resu) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.status(200).json(resu);
    })
})

app.get('/scoreget5/:id', (req, res) => {
    const { id } = req.params;
    const q = 'select gate5 from score where id=?';
    db.query(q, [id], (err, resu) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.status(200).json(resu);
    })
})

app.get('/scoreget6/:id', (req, res) => {
    const { id } = req.params;
    const q = 'select gate6 from score where id=?';
    db.query(q, [id], (err, resu) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.status(200).json(resu);
    })
})

app.get('/stats/:id', (req, res) => {
    const { id } = req.params;
    const q = 'select * from score where id=?';
    db.query(q, [id], (err, resu) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.status(200).json(resu);
    })
})

app.put('/reset/:id',(req,res)=>{
    const {id} = req.params;
    const q = 'update score set gate1=0,gate2=0,gate3=0,gate4=0,gate5=0,gate6=0 where id=?';
    db.query(q,[id],(err,result)=>{
        if(err)
        {
            return res.status(500).json({error:err.message})
        }
        res.status(200).json(result);
    })
})

app.get('/percent/:id', (req, res) => {
    const { id } = req.params;
    const q = 'select average from score where id=?';
    db.query(q, [id], (err, resu) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.status(200).json(resu);
    })
})

app.get('/ranks',(req,res)=>{
    const q = 'select user,sum from score order by sum DESC';
    db.query(q, (err, resu) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.status(200).json(resu);
    })

})

app.listen(3001, () => {
    console.log('sever running');
});