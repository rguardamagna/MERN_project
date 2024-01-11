const usuarioCtrl = {}

const Usuario = require('../models/User')

usuarioCtrl.getUser = async(req, res) => {
    const users = await Usuario.find()
    res.json(users)
}

usuarioCtrl.createUser = async(req, res) => {
    const {nombre, apellido, correo, telefono, edad} = req.body;
    const newUser = new Usuario (
        {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono,
            edad: edad
        }
    )
    await newUser.save()
    res.json({message: "el usuario ha sido creado"})

}

usuarioCtrl.getUserById = async(req, res) => {
    const user = await Usuario.findById(req.params.id)    
    res.json(user)
}

usuarioCtrl.deleteUserById = async(req, res) => {
    await Usuario.findByIdAndDelete(req.params.id)    
    res.json({message: 'El usuario ha sido eliminado'})
}


usuarioCtrl.updateUserById = async(req, res) => {
    const {nombre, apellido, correo, telefono, edad} = req.body;
    await Usuario.findByIdAndUpdate(req.params.id,
        {nombre,
        apellido,
        correo,
        telefono,
        edad
    })
    res.json({message: 'El usuario ha sido actualizado'})
}

module.exports = usuarioCtrl