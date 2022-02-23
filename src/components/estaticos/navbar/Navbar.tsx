import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar position="static">
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

                    <Link to='/cadastrartema' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/login' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                    </Link>


                </Toolbar >
            </AppBar >
        </>
    )
}


export default Navbar;