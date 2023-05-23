const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarConfig');
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

const app = express();
const port = 5000;

expressConfig(app);
handlebarsConfig(app);

app.use(homeController);
app.use('/cubes', cubeController);

app.get('*', (req, res) =>{

    res.redirect('/404')
})


// app.get('/', (req, res) => {
//     res.render('index');
// })

app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}...`)
})