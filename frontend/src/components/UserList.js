import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'




const UserList = () => {
    const [list, setList] = useState([])

    useEffect(()=>{

        const getUsers = async() => {
            const res = await axios.get('http://localhost:4000/api/users')
            setList(res.data)
        }

        getUsers();

    },[list])

    const deleteUser = async (id) => {
        await axios.delete('http://localhost:4000/api/users/' + id)
    }

       
    return (
        <div className='row'>
            {
                list.map(list => (
                    <div className='col-md-4 p-2' key={list._id}>
                        <div className='card'>
                            <div className='card-header'>
                                <h5>Nombre: {list.nombre}</h5>
                            </div>
                            <div className='card-body'>
                                <p>Apellido: {list.apellido}</p>
                                <p>Edad: {list.edad}</p>
                                <p>Telefono: {list.telefono}</p>
                                <p>Correo: {list.correo}</p>
                            </div>
                            <div className='card-footer'>
                                <button className='btn btn-danger' onClick={()=>deleteUser(list._id)}>
                                    Eliminar
                                </button>
                                <Link className='btn btn-primary m-1' to={'/edit/' + list._id}>
                                    Editar
                                </Link>
                            </div>
                        </div>   
                    </div>
                ))
            }
        </div>
    )
}

export default UserList