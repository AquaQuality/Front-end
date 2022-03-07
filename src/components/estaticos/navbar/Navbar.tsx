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
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

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
                                Novo tema
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
