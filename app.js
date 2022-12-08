//Built-in
const http =require ("http");

//Third-party
const express = require("express");
const cors = require("cors");
const morgan =  require("morgan");
const dotenv = ("dotenv");
const { DataSource } = require('typeorm'); 

//Custom package
require("dotenv").config()
const route = require('./api/routes')

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));
app.use(route);

const appData = new DataSource ({
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
});


appData.initialize()
  .then(()=>{
    console.log("Data Source has been initialized!")
  });

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


