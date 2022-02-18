import React from "react";
import { Typography } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';




function Sobrenos() {

    return (
        <>
            <Typography variant="h3" gutterBottom color='textPrimary' component="h3" align="center"> Sobre Nós </Typography>
            <Grid container direction="row" alignItems="center">
                <Grid xs={4}>Amanda</Grid>
                <Grid xs={4}>Cibele</Grid>
                <Grid xs={4}>Iago</Grid>
                <Grid xs={4}>Lucas</Grid>
                <Grid xs={4}>Bruno</Grid>
                <Grid xs={4}>Vitoria</Grid>
                <Grid xs={4}>Vitoria O</Grid>
            </Grid>

            <Grid direction="row" alignItems="center">
                <Grid item xs={6}>
                    <Box> <div>
                    1 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Santos_logo.svg/1200px-Santos_logo.svg.png" alt="" width="500px" height="550px" />
                    </div>
                    <div>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae minima doloribus ducimus accusamus tempora aspernatur velit debitis non nesciunt quos optio pariatur rem, quo necessitatibus vel molestias, doloremque reiciendis deserunt.</Typography>
                    </div>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box>2</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box>3</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box>4</Box>
                </Grid>
            </Grid>

        </>

    )
}

export default Sobrenos;







