// importart libraries
const express = require('express');
const mongosse = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');


//use methods libs
const app = express();
require ('dotenv').config();


//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

//database setup
mongosse.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
}).then(()=>{console.log("coneccion exitosa!")})

//routes setup
app.get('/', (req, res)=>{
    res.send("proyecto de junta de vecinos")
});

//listen to port
const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`servidor se esta ejecutado en el puerto ${port}`)
});