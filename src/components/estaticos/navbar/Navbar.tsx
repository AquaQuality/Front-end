
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';
import { addToken } from '../../../store/user/action';
import HomeIcon from '@mui/icons-material/Home';
import { toast } from 'react-toastify';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import WorkIcon from '@material-ui/icons/Work';

function Navbar() {

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
                            ACQUAQUALITY
                        </Typography>
                    </Box>
                </Link>

                <Link to='/home' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Box marginRight={1}  >
                            <HomeIcon fontSize="large" className='icone' />
                        </Box>
                    </Box>
                </Link>

                {/*<Link to='/temas' className='text-decorator-none'>
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
                    </Box> </Link>*/}

                <Link to='/sobrenos' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                        <WorkIcon fontSize="large" className='icone' />
                        </Typography>
                    </Box>
                </Link>

                <Link to='/perfil' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant='h6' color='inherit'>
                            <PersonOutlineIcon fontSize="large" className='icone' />
                        </Typography>
                    </Box>
                </Link>

                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit" onClick={goLogout}>
                        <LogoutIcon fontSize="large" className='icone' />
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
