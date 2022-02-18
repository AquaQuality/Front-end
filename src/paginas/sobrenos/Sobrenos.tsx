import React from "react";
import Carousel1 from "../carousel/Carousel";
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';




function Sobrenos() {

    return (
        <>
            <Grid container direction="row" alignItems="center">
                <Grid item xs={12} alignItems="center">
                    <Box>
                        <Typography variant="h3" gutterBottom color='textPrimary' component="h3" align="center"> Sobre Nós </Typography>

                        <Carousel1 />

                    </Box>

                </Grid >
                <Grid item>
                    <Box>
                        <Typography variant="h3" gutterBottom color='textPrimary' component="h3" align="center">Contatos</Typography>

                        <form>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos'> Fale com a gente! </Typography>

                            <TextField id='nome' label='nome' variant='outlined' name='Nome' margin='normal' fullWidth />
                            <TextField id='email' label='email' variant='outlined' name='E-mail' margin='normal' type='password' fullWidth />
                            <TextField id='assunto' label='assunto' variant='outlined' name='Assunto' margin='normal' type='password' fullWidth />

                            <Box>

                                <Button type='submit' variant='contained' color='primary'> Enviar </Button>

                            </Box>

                        </form>


                    </Box>

                </Grid>

            </Grid>
        </>

    )
}







