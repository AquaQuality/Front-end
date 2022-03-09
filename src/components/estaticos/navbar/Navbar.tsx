
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//import { TokenState } from '../../../store/tokens/tokensReducer';
import { UserState } from '../../../store/user/userReducer';

//import { addToken } from '../../../store/tokens/actions';
import { addToken, addId } from '../../../store/user/action';

import { toast } from 'react-toastify';
import { Avatar } from '@material-ui/core';

function Navbar() {

    //const token = useSelector<TokenState, TokenState["tokens"]>(
        const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
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

    if (token !== "") {
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

                <Link to='/contato' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Contato
                        </Typography>
                    </Box>
                </Link>

                {/*<Link to='/formularioTema' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Novo tema
                        </Typography>
                    </Box>
    </Link>*/}

                <Link to='/temas' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Temas
                        </Typography>
                    </Box>
                </Link>

                <Link to='/postagens' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant='h6' color='inherit'>
                            Postagens
                        </Typography>
                    </Box>
                </Link>

                <Link to='/perfil' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant='h6' color='inherit'>
                            Perfil
                        </Typography>
                    </Box>
                </Link>
                <Link to='/sobrenos' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Sobre nós
                        </Typography>
                    </Box>
                </Link>

                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit" onClick={goLogout}>
                    <Avatar alt="" src="/static/images/avatar/2.jpg" className='avatar-navbar' />
                    </Typography>
                </Box>
            </Toolbar >
        </AppBar >
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}


export default Navbar;
