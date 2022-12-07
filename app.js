//Built-in
const http =require ("http");

//Third-party
const express = require("express");
const cors = require("cors");
const morgan =  require("morgan");

//Custom package
require("dotenv").config()

const route = require('./api/routes')
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));
app.use(route);

const PORT = process.env.PORT;
const server = http.createServer(app);

app.get('/ping',(req,res)=>{
    res.status(200).json({"message": "pong!"})
});

const start = async () =>{
    try{
        server.listen(PORT, ()=> console.log(`Server is listening!`))
    }catch (err){
        console.error(err);
    }
};

start();


