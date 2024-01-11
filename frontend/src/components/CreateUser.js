import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const CreateUser = () => {

    const valorIncial={
        nombre:'',
        apellido:'',
        edad:0,
        telefono:0,
        correo:''
    }

    let {id} = useParams();

    const [user, setUser] = useState(valorIncial)
    const [subId, setSubId] = useState(id)

    const captureData = (e) => {
        const {name , value} = e.target
        setUser({...user, [name]: value})
    }

    const saveData = async(e) => {
        e.preventDefault();
        
        // Logica para peticion POST
        const newUser = {
            nombre: user.nombre,
            apellido: user.apellido,
            edad: user.edad,
            telefono: user.telefono,
            correo: user.correo
        }
        await axios.post('http://localhost:4000/api/users', newUser)

        
        setUser({... valorIncial})
    }

    // Logica para solicitar un elemento a la API
    
    const obtainOne = async(valueId) => {
        const res = await axios.get('http://localhost:4000/api/users/' + valueId)
        setUser({
            nombre:res.data.nombre,
            apellido:res.data.apellido,
            edad:res.data.edad,
            telefono:res.data.telefono,
            correo:res.data.correo
        })
    }

    // Funcion para actualizar un usuario

    const updateUser = async(e) => {
        e.preventDefault();
        const newUser = {
            nombre: user.nombre,
            apellido: user.apellido,
            edad: user.edad,
            telefono: user.telefono,
            correo:user.correo
        }
        await axios.put('http://localhost:4000/api/users/' + subId, newUser)
        setUser({... valorIncial})
        setSubId('')

    }
    
    useEffect(() => {

        if (subId !== "") {
            obtainOne(subId)
        }
    },[subId])

    return (
        <div className='col-md-6 offset-md-3'>
            <div className='card card-body'>
                <h2 className='text-center mb-3'>Crear Usuario</h2>
                <div className='mb-3'>
                    <form onSubmit={saveData}>
                        <label>
                            Nombre
                        </label>
                        <input type="text" className='form-control' 
                        required placeholder='Ingrese Nombre de usuario' 
                        name='nombre'
                        value={user.nombre}
                        onChange={captureData}
                        />
                        <label>
                            Apellido
                        </label>
                        <input type="text" className='form-control' 
                        required placeholder='Ingrese Apellido de usuario' 
                        name='apellido'
                        value={user.apellido}
                        onChange={captureData}
                        />
                        <label>
                            Edad
                        </label>
                        <input type="Number" className='form-control' 
                        required placeholder='Ingrese Edad de usuario' 
                        name='edad'
                        value={user.edad}
                        onChange={captureData}
                        />
                        <label>
                            Telefono
                        </label>
                        <input type="Number" className='form-control' 
                        required placeholder='Ingrese Telefono de usuario'
                        name='telefono'
                        value={user.telefono}
                        onChange={captureData}
                        />
                        <label>
                            Correo Electronico
                        </label>
                        <input type="Text" className='form-control' 
                        required placeholder='Ingrese Correo electronico de usuario' 
                        name='correo'
                        value={user.correo}
                        onChange={captureData}
                        />
                        <button className='btn btn-primary form-control mt-3'>
                            Guardar
                        </button>
                    </form>

                    <form onSubmit={updateUser}>
                        <button className='btn btn-danger form-control mt-2'>
                            Actualizar 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser