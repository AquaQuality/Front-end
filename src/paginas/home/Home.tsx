import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token === "") {
        toast.error('Você precisa estar logado!', {
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
                    <Box paddingX={10} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'> Seja bem vindo(a)! </Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" className='titulo1'> Expresse aqui os seus pensamentos e opiniões!" </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Link to='/postagens' className='text-decorator-none'>
                            <Button variant="outlined" className='botao'> Postagens </Button>
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={6} >
                    <img src="https://trello.com/1/cards/62161b323212cb2dd94f507e/attachments/62164d41d33baa46c2e8acc2/previews/62164d42d33baa46c2e8acfa/download/vetorlogo.png" alt="" width="500px" height="500px" />
                </Grid>

                <Grid xs={12} className='postagens'>
                
                </Grid>
                
            </Grid>
        </>
    );
}

export default Home;