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

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }));

    return (
        <Grid container className='card-principal'>
            <Box className='card-container-imagem'>
            <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot">
                <Avatar className='card-imagem'
                    src={user.foto}
                    alt={user.nome} 
                    sx={{ width: 200, height: 200 }} 
                    variant="square" />
                    </StyledBadge>

            </Box>

            <Box className='card-container-info'>
                <Box>
                    <h2>{user.nome}</h2>
                    <hr />
                </Box>
                <Box alignItems='center' className=''>
                    <img src="https://i.imgur.com/fflDO4i.png" alt="logo" width='400px' height='200' />

                </Box>
            </Box>
        </Grid>
    )
}

export default Perfil