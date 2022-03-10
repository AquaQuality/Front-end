import React from 'react';

import { Link } from 'react-router-dom';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import "./Sobrenos.css";
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Sobrenos() {
    return (
        <>
            <Box className='fundo'>
                <Box paddingX={20} className="box">
                    <Grid className="container2" justifyContent='center'>
                        <Grid item xs={12} alignItems='center' justifyContent='center'>
                        <img src="https://i.imgur.com/U8cvwuV.png" alt="" className='logo2'/>
                            <Typography variant="h3" className="sobre">AcquaQuality</Typography>
                            <Typography variant="h6" className="texto">Falar de valores é algo imprescindível aqui na AcquaQuality, pois não há como sustentar nossa palavra sem levar nossos ideais. Foram eles que nos fizeram chegar até aqui e com isso nos conectamos várias pessoas com o mesmo propósito: Ajudar o meio ambiente. </Typography>

                            <Typography variant="h4" className="texto">Nossos valores são: </Typography>

                            <Typography variant="h6" className="texto"><p>Sustentabilidade;</p>
                                <p>Respeito à vida, às pessoas e ao meio ambiente;</p>
                                <p>Honestidade;</p>
                                <p>Inovação;</p>
                                <p>Paixão por tecnologia;</p>
                                <p>Transparência;</p>
                                .</Typography>
                        </Grid>

                    </Grid>
                </Box>

                <Box paddingX={20} className='alinha'>
                    <Grid className="container">
                        <Grid item xs={12}>
                            <Typography className="time" variant="h3">Equipe de Desenvolvimento</Typography>
                        </Grid>
                        <Grid item xs={4} className='alinhar'>
                            <div id="passar_mouse">
                                <img src="https://i.imgur.com/cZ4j2f7.png" width="150" height="150" className='img3' />
                                <div id="mostrar">Amanda</div></div>
                            <a href="https://github.com/AquaQuality" target="_blank" rel="noreferrer" >
                                <GitHubIcon className='redes1' />
                            </a>
                            <a href="acquaquality.pi@gmail.com" target="_blank">
                                <EmailIcon className='redes1' />
                            </a>
                            <a href="https://www.linkedin.com/in/vit%C3%B3ria-santos-oliveira-53755b189/" target="_blank">
                                <LinkedInIcon className='redes1' />
                            </a>
                        </Grid>
                        <Grid item xs={4} className='alinhar'>
                            <div id="passar_mouse">
                                <img src="https://i.imgur.com/KS5OGHd.jpg" width="150" height="150" className='img3' />
                                <div id="mostrar">Bruno <p>Um fanático por tecnologia e suas diretrizes em desenvolvimento, busco sempre estar atento a tendências tecnológicas e conhecer sobre os assuntos dos quais quero me especializar e agregar
                                    habilidades em minha carreira, tais como desenvolvimento de sistemas, cloud computing, banco de
                                    dados, gestão ágil entre outras.
                                </p></div>
                            </div>
                            <a href="https://github.com/AquaQuality" target="_blank" rel="noreferrer" >
                                <GitHubIcon className='redes1' />
                            </a>
                            <a href="acquaquality.pi@gmail.com" target="_blank">
                                <EmailIcon className='redes1' />
                            </a>
                            <a href="https://www.linkedin.com/in/vit%C3%B3ria-santos-oliveira-53755b189/" target="_blank">
                                <LinkedInIcon className='redes1' />
                            </a>
                        </Grid>
                        <Grid item xs={4} className='alinhar'>
                            <div id="passar_mouse">
                                <img src="https://i.imgur.com/5dVrzyQ.jpg" width="150" height="150" className='img3' />
                                <div id="mostrar">Cibele França<p>
                                    Sou uma pessoa bastante comunicativa e extrovertida, por isso, gosto de fazer o lugar no qual estou um lugar engraçado e descontraído. Gosto de sair com meus amigos, assistir séries e ouvir músicas.

                                    Procuro sempre estar aprendendo sobre tudo, novas culturas, novas histórias. Gosto muito de me comunicar com tudo, sou uma pessoa muito esforçada, se tem algo que eu não sei eu sempre faço de tudo para entender e aprender, e por meio da tecnologia pretendo ajudar o máximo de pessoas que eu conseguir.
                                </p></div></div>
                            <a href="https://github.com/AquaQuality" target="_blank" rel="noreferrer" >
                                <GitHubIcon className='redes1' />
                            </a>
                            <a href="acquaquality.pi@gmail.com" target="_blank">
                                <EmailIcon className='redes1' />
                            </a>
                            <a href="https://www.linkedin.com/in/vit%C3%B3ria-santos-oliveira-53755b189/" target="_blank">
                                <LinkedInIcon className='redes1' />
                            </a>
                        </Grid>
                        <Grid item xs={3} className='alinhar'>
                            <div id="passar_mouse">
                                <img src="https://imgur.com/3zTAXAL.jpg" width="150" height="150" className='img3' />
                                <div id="mostrar">Iago Vieira<p>Tenho 21 anos e sou um apaixonado por tecnologia. Procuro sempre me mantar informado nas novas tecnologias do mercado e me aperfeiçoar mais. Espero contribuir para um mundo cada vez mais integrado e conectado</p></div></div>
                            <a href="https://github.com/AquaQuality" target="_blank" rel="noreferrer" >
                                <GitHubIcon className='redes1' />
                            </a>
                            <a href="acquaquality.pi@gmail.com" target="_blank">
                                <EmailIcon className='redes1' />
                            </a>
                            <a href="https://www.linkedin.com/in/vit%C3%B3ria-santos-oliveira-53755b189/" target="_blank">
                                <LinkedInIcon className='redes1' />
                            </a>
                        </Grid>
                        <Grid item xs={3} className='alinhar'>
                            <div id="passar_mouse">
                                <img src="https://i.imgur.com/lVwgmAG.jpg" width="150" height="150" className='img3' />
                                <div id="mostrar">Lucas Oi<p> Sou formado como pessoa desenvolvedora Fullstack Java JR. pela Generation Brasil, além de cursar o 6º ciclo de engenharia elétrica, estou sempre em busca de novos desafios, gosto de café, estar na natureza e tocar violão.</p></div></div>
                            <a href="https://github.com/AquaQuality" target="_blank" rel="noreferrer" >
                                <GitHubIcon className='redes1' />
                            </a>
                            <a href="acquaquality.pi@gmail.com" target="_blank">
                                <EmailIcon className='redes1' />
                            </a>
                            <a href="https://www.linkedin.com/in/vit%C3%B3ria-santos-oliveira-53755b189/" target="_blank">
                                <LinkedInIcon className='redes1' />
                            </a>
                        </Grid>
                        <Grid item xs={3} className='alinhar'>
                            <div id="passar_mouse">
                                <img src="https://i.imgur.com/OhuIOWe.jpg" width="150" height="150" className='img3' />
                                <div id="mostrar">Vitoria Oliveira</div></div>
                            <a href="https://github.com/AquaQuality" target="_blank" rel="noreferrer" >
                                <GitHubIcon className='redes1' />
                            </a>
                            <a href="acquaquality.pi@gmail.com" target="_blank">
                                <EmailIcon className='redes1' />
                            </a>
                            <a href="https://www.linkedin.com/in/vit%C3%B3ria-santos-oliveira-53755b189/" target="_blank">
                                <LinkedInIcon className='redes1' />
                            </a>
                        </Grid>
                        <Grid item xs={3} className='alinhar'>
                            <div id="passar_mouse">
                                <img src="https://i.imgur.com/yS7HM9o.jpg" width="150" height="150" className='img3' />
                                <div id="mostrar">Vitoria Romão<p>Adoro desafios que aumentam meu horizonte e mudam meu modo de ver a vida, por esse motivo decidi fazer a transição de carreira. Sou uma pessoa criativa, que ama novos conhecimentos, e com isso me encontrei como desenvolvedora. Acredito que levarei boa parte da minha bagagem adquirida nessa nova etapa da minha jornada.</p></div></div>
                            <a href="https://github.com/AquaQuality" target="_blank" rel="noreferrer" >
                                <GitHubIcon className='redes1' />
                            </a>
                            <a href="acquaquality.pi@gmail.com" target="_blank" >
                                <EmailIcon className='redes1' />
                            </a>
                            <a href="https://www.linkedin.com/in/vit%C3%B3ria-santos-oliveira-53755b189/" target="_blank">
                                <LinkedInIcon className='redes1' />
                            </a>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Sobrenos;