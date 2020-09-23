const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

//Creando el puerto
const port = process.env.PORT || 8080;

//Creando rutas
// const about = require('./json/about.json');
const portfolio = require('./json/portfolio.json');


// app.get('/about', (req, res) => {
//     //renderiza
//     res.json(about)
// });


app.get('/portfolio', (req, res) => {
    res.json(portfolio)
});

app.listen(port, () => {
    console.log(`Server on: ${port}`)
});
