import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
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
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} className=''>
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1} className='botao' >
                            <ModalTema />
                        </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1} className='botao' >
                            <ModalPostagem />
                        </Box>
                                           </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} className='imagem1' ></Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;