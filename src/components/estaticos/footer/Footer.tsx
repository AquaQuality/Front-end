import React from 'react';
import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';

function Footer() {

        const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      );

      var footerComponent;

      if(token !== ""){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box className='box1'>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://github.com/AquaQuality" target="_blank">
                        <GitHubIcon className='redes'/>
                    </a>
                    <a href="acquaquality.pi@gmail.com" target="_blank">
                        <EmailIcon className='redes' />
                    </a>
                </Box>
            </Box>
            <Box className='box2'>
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom className='textos'>© 2022 Copyright:</Typography>
                </Box>
                <Box>
                    <a target="_blank" href="https://brasil.generation.org">
                        <Typography variant="subtitle2" gutterBottom className='textos' align="center">brasil.generation.org</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
      }

    return(
        <>
        {footerComponent}
        </>
    );
}

export default Footer;