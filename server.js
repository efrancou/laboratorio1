
const express = require('express');
const hbs = require('hbs');
const app = express();

const port = process.env.PORT || 3000;

//TODO: Requerimos de (hbs);
app.set('view engine', 'hbs');

//TODO: Parciales
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estatico 
app.use( express.static('public'))

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Esteban Francou',
        titulo: 'TRABAJO PRÁCTICO EVALUADOR:'
    })
  });


app.get('/not-home', function (req, res) {
    res.render('not-home')
  });

 
app.listen(port, () => {

    console.log(`Escuchando el servidor en el puerto http://localhost:${port}`);
});