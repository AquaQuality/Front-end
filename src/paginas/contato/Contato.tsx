import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@material-ui/core';

function Contato() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={6}>
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
            <Grid item xs={6} style={{ marginTop: 30, paddingLeft: 130 }}>
                <img src="https://unric.org/pt/wp-content/uploads/sites/9/2019/01/SDG-icon-PT-RGB-06-1.jpg
                " alt="" width="900px"
                />
            </Grid>
        </Grid>

    );
}

export default Contato;