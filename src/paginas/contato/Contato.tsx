import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@material-ui/core';
import './Contato.css';

function Contato() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className='root'>
            <Grid alignItems="center" item xs={6} className='formulario'>
                <form >
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos'> Fale com a gente! </Typography>

                    <TextField id='nome' label='nome' variant='outlined' name='Nome' margin='normal' fullWidth />
                    <TextField id='email' label='email' variant='outlined' name='E-mail' margin='normal' type='password' fullWidth />
                    <TextField id='assunto' label='assunto' variant='outlined' name='Assunto' margin='normal' type='password' fullWidth />

                    <Box marginTop={2} textAlign='center'>

                        <Button type='submit' variant='contained' color='primary'> Enviar </Button>

                    </Box>
                </form>
            </Grid>
            <Grid item xs={6} className= 'imagem3'>
                <img src="https://trello.com/1/cards/62161b323212cb2dd94f507e/attachments/62164d41d33baa46c2e8acc2/previews/62164d42d33baa46c2e8acfa/download/vetorlogo.png" alt=""  width="690px"
                />
            </Grid>
        </Grid>

    );
}

export default Contato;