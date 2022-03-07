<<<<<<< HEAD
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css';
import { Link, useHistory } from 'react-router-dom';
=======
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
>>>>>>> a428bb4dc26755b0b3b5bba416838c7c6b8872ba
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }


var navbarComponent;

if(token !== ""){
    navbarComponent = <AppBar position="static">
    <Toolbar variant="dense" className='barra'>
        <Link to='/home' className='text-decorator-none'>
            <Box className='cursor'>
                <Typography variant="h5" color="inherit">
                    AcquaQuality
                </Typography>
            </Box>
        </Link>

        <Link to='/home' className='text-decorator-none'>
            <Box display="flex" justifyContent="start">
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Inicio
                    </Typography>
                </Box>
            </Box>
        </Link>


        <Link to='/sobrenos' className='text-decorator-none'>
            <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                    Sobre nós
                </Typography>
            </Box>
        </Link>

        <Link to='/contato' className='text-decorator-none'>
            <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                    Contato
                </Typography>
            </Box>
        </Link>

        <Link to='/formularioTema' className='text-decorator-none'>
            <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                    Novo tema
                </Typography>
            </Box>
        </Link>

        <Link to='/temas' className='text-decorator-none'>
            <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                    Temas
                </Typography>
            </Box>
        </Link>
            <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit" onClick={goLogout}>
                    logout
                </Typography>
            </Box>
    </Toolbar >
</AppBar >}

    return (
        <>
            {navbarComponent}
        </>
    )
}


export default Navbar;
