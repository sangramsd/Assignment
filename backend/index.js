
const cors = require ("cors");
const express = require ("express");

const mysql =require("mysql2");

const app = express();


const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"Sangram@1996",
    database:"admitcard"
});

app.use(express.json())
app.use(cors())


app.get("/", (req, res)=>{
    res.json("hello backend")
})

app.get("/cards", (req, res) =>{
    const q ="SELECT * FROM cards"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/cards",(req,res)=>{
    const q = "INSERT INTO cards(`name`,`email`,`phoneno`,`address`,`rollno`,`school`,`std`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.phoneno,
        req.body.address,
        req.body.rollno,
        req.body.school,
        req.body.std,
    ];
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

})




app.listen(8070, () =>{
    console.log("server run  on 8070")
})