const express = require('express');
const cors = require('cors');

const app = express();

// configuración

app.set('port', process.env.PORT || 4000)

// Middlewares

app.use(cors())
app.use(express.json())

// Rutas

app.get('/', (req, res) => {
    res.send('Bienvenido a mi API RESTful')
})

// Ruta para la API de usuarios

app.use('/api/users/', require('./routes/user'))

module.exports = app;

