const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarConfig');

const app = express();
const port = 5000;

expressConfig(app);
handlebarsConfig(app);


app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}...`)
})