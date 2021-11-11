const express = require('express')
const app = express()

const db = require('./src/db/crud.js')

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Mi primer servidor en express')
});

app.get('/nueva_ruta', function (req, res){
    res.send('Mi primera ruta en express');
});
   
app.get('/ciudades', function(req, res){
    res.json({
        "ciudad1": "Bogotá",
        "ciudad2": "Barranquilla"
    })
})
app.listen(3000);
