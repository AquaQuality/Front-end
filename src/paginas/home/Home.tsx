import React from "react";
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';

function Home() {
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
                        <Button variant="outlined" className='botao'> Postagens </Button>
                    </Box>
                </Grid>

<<<<<<< HEAD
                <Grid item xs={6}>
                    <img src="https://trello.com/1/cards/62161b323212cb2dd94f507e/attachments/62164d41d33baa46c2e8acc2/previews/62164d42d33baa46c2e8acfa/download/vetorlogo.png" alt="" width="500px" height="500px" />
=======
                <Grid item xs={6} className='imagem'>
                    
>>>>>>> 30e7549526b8b297be35824bb11fa11c7fe5b9e4
                </Grid>

                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;