import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

//import { TokenState } from '../../store/tokens/tokensReducer';
import { UserState } from '../../store/user/userReducer';


import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ModalTema from '../../components/temas/modalTema/ModalTema';
import Perfil from '../perfil/Perfil';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/Home';
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem';

function Home() {

    let history = useHistory();
    //const token = useSelector<TokenState, TokenState["tokens"]>(
        const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token === "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")

        }
    }, [token])
    return (
        <>
            <Grid container spacing={2} direction="row" justifyContent="center" className='caixa'>
                
                <Grid alignItems="center" direction="column" item xs={4} className='paperpost'>
                    <Box paddingX={20} className="bemvindo">
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" className='titulo'>Comece uma nova publicação:</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1} className='botao' >
                            <ModalPostagem />
                        </Box>
                        </Box>
                    
                        <Perfil />

                </Grid>

                <Grid xs={7} className='postagens'>
                    <ListaPostagem />
                </Grid >

            </Grid>
        </>
    );
}

export default Home; 