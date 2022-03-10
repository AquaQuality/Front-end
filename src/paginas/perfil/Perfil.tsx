import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { UserState } from '../../store/user/userReducer';
import User from '../../models/User';
import { buscaId } from '../../services/Services';
import { styled } from '@mui/material/styles';
import './Perfil.css';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

function Perfil() {

    let history = useHistory()

    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,     // Faz uma conversão de String para Number
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history.push("/login")
        }
    }, [token])

    async function findById(id: string) {
        buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])


    return (
        <Grid container className='card-principal'>
            <Box className='card-container-imagem'>
                <Avatar className='card-imagem'
                    src={user.foto}
                    alt={user.nome} 
                    sx={{ width: 300, height: 300 }} 
                    variant="square" />
                    

            </Box>

            <Box >
                <Box>                    
                    <h2>{user.nome}</h2>
                    <hr />
                </Box>
                <Box alignItems='center' className='' >
                    <img src="https://i.imgur.com/fflDO4i.png" alt="logo" width='400px' height='200' />

                </Box>
            </Box>
        </Grid>
    )
}

export default Perfil