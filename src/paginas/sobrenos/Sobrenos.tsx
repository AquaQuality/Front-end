import React from "react";
import { Typography } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Sobrenos.css';

function Sobrenos() {

    return (
        <>
            
                        <Box padding={4}>
                    <Typography variant="h4" gutterBottom color='textPrimary' component="h4" align="center" className="titulo" > Nossa equipe </Typography>
                </Box>

                <Grid container direction="row" justifyContent="center" alignItems="center" >

                    <Grid alignItems="center" item xs={6} >
                        <Box paddingX={10} >
                            <h1>Amanda Marques</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis
                                reprehenderit repudiandae vel ipsum quaerat nemo repellendus quidem dolorem
                                inventore dicta placeat impedit quos consectetur magni, ut sapiente eveniet aliquid?
                            </p>
                        </Box>
                    </Grid>
                    <Grid item xs={6} className='card'>
                        <img className='img' src="https://i.imgur.com/cZ4j2f7.png" alt="Bruno Feliz" />
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={6} className='card'>
                        <img className='img' src="https://i.imgur.com/OjpYMCc.jpg" alt="Bruno Feliz" />
                    </Grid>
                    <Grid alignItems="center" item xs={6}>
                        <Box paddingX={10}>
                            <h1>Bruno Felix</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
                                corporis reprehenderit repudiandae vel ipsum quaerat nemo repellendus quidem
                                dolorem inventore dicta placeat impedit quos consectetur magni, ut sapiente eveniet aliquid?
                            </p>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid alignItems="center" item xs={6}>
                        <Box paddingX={10}>
                            <h1>Cibele França</h1>
                            <p>
                                MeninoNey é top, nunca devia ter saído do Santos, amo vocês meus santistas
                            </p>
                        </Box>
                    </Grid>
                    <Grid item xs={6} className='card img'>
                        <img className='img' src="https://i.imgur.com/BOdWp3q.png" alt="" />
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={6} className='card'>
                        <img className='img' src="https://i.imgur.com/OjpYMCc.jpg" alt="Iago Vieira" />
                    </Grid>
                    <Grid alignItems="center" item xs={6}>
                        <Box paddingX={10}>
                            <h1>Iago Vieira</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis
                                reprehenderit repudiandae vel ipsum quaerat nemo repellendus quidem dolorem inventore
                                dicta placeat impedit quos consectetur magni, ut sapiente eveniet aliquid?
                            </p>
                        </Box>
                    </Grid>

                </Grid>

                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid alignItems="center" item xs={6}>
                        <Box paddingX={10}>
                            <h1>Lucas Oi</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis
                                reprehenderit repudiandae vel ipsum quaerat nemo repellendus quidem dolorem inventore
                                dicta placeat impedit quos consectetur magni, ut sapiente eveniet aliquid?
                            </p>
                        </Box>
                    </Grid>
                    <Grid item xs={6} className='card'>
                        <img className='img' src="https://i.imgur.com/OjpYMCc.jpg" alt="Lucas Oi" />
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={6} className='card'>
                        <img className='img' src="https://i.imgur.com/OhuIOWe.jpg" alt="Vitoria Oliveira" />
                    </Grid>
                    <Grid alignItems="center" item xs={6}>
                        <Box paddingX={10}>
                            <h1>Vitoria Oliveira</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sapiente non nihil
                                ipsam facilis assumenda eligendi saepe blanditiis a quis minus laboriosam odit soluta
                                dolore adipisci nam, cupiditate delectus deserunt. Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. A ab nesciunt soluta ea alias necessitatibus, quia eum voluptatibus,
                                libero nobis deserunt ad modi. Voluptatem deserunt doloribus odit repellendus temporibus. Debitis!
                            </p>
                            <a href="https://github.com/AquaQuality" target="_blank">
                            <GitHubIcon className='redes'/>
                             </a>
                            <a href="acquaquality.pi@gmail.com" target="_blank">
                            <EmailIcon className='redes' />
                             </a>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid alignItems="center" item xs={6}>
                        <Box paddingX={10}>
                            <h1>Vitoria Romão</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis
                                reprehenderit repudiandae vel ipsum quaerat nemo repellendus quidem dolorem inventore
                                dicta placeat impedit quos consectetur magni, ut sapiente eveniet aliquid?
                            </p>
                        </Box>
                    </Grid>
                    <Grid item xs={6} className='card'>
                        <img className='img' src="https://i.imgur.com/OjpYMCc.jpg" alt="Vitoria Romão" />
                    </Grid>
                </Grid>

        </>

    )
}

export default Sobrenos;