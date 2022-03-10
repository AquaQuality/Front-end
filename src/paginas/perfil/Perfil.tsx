import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { UserState } from '../../store/user/userReducer';
import User from '../../models/User';
import { buscaId } from '../../services/Services';
import './Perfil.css';
import Avatar from '@mui/material/Avatar';
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem';


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
            <Box>
                <Box alignItems='center'>                    
                    <h2>{user.nome}</h2>
                    <hr />
                </Box>
                <Box alignItems='center' className=''>
                    <Typography><p>Lorem atum nulla magni voluptatibus temporibus. Ea, aliquam.</p> <p>placeat vel qui,perferendis dolores minima voluptatum nulla magni voluptatibus temporibus. Ea, aliquam.</p></Typography>
                </Box>
            </Box>
            {/** <Grid>
                <ListaPostagem />
            </Grid> */}
           
        </Grid>
    )
}

export default Perfil