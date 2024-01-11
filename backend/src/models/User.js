const {Schema, model} = require("mongoose")
 
const userSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    telefono: Number,
    correo: String
},
{
    timestamp: true
})

module.exports = model('User',userSchema)

