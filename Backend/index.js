const express = require('express')
const app = express()

const db = require('./src/db/crud.js')

app.use(express.static('public'));

app.get('./', function (req, res){
    res.send('Bienvenidos al servidor de Experts')
});

app.get('/get_experts', function (req, res) {
    db.getExperts(function(arrayExperts){
        res.send(arrayExperts);
    })
});

app.listen(3000);
