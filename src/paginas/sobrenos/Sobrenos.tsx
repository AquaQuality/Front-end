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
                            <img src="https://i.imgur.com/U8cvwuV.png" alt="" className='logo2' />
                            <Typography variant="h3" className="sobre">AcquaQuality</Typography>
                            <Typography variant="h6" className="texto" >
                            Sempre que nos deparamos com problemas criamos novas ideias, e dessa vez não foi diferente. Após percebermos inúmeros problemas no saneamento básico e na distribuição de água potável na região da Grande São Paulo decidimos criar uma rede de pessoas dispostas a ajudar. Nossa rede social usa como parâmetro os Objetivos de Desenvolvimento Sustentável (ODS) da ONU, mais especificadamente a claúsula 6.6-b "Apoiar e fortalecer a participação das comunidades locais, para melhorar a gestão da água e do saneamento.". Acreditamos que  juntos conseguimos a força que precisamos para tornar nossa região melhor.
                            <p>Vem fazer parte desse projeto com a gente!</p>
                            </Typography>

                            <Typography variant="h4" className="texto">
                            Falar de valores é algo imprescindível aqui na AcquaQuality, pois não há como sustentar nossa palavra sem levar nossos ideais. Foram eles que nos fizeram chegar até aqui e com isso nos conectamos várias pessoas com o mesmo propósito: Ajudar o meio ambiente.
                            <p><b>Nossos valores são:</b></p> </Typography>

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
                                <img src="https://i.imgur.com/cZ4j2f7.png" alt='Amanda Marques' width="150" height="150" className='img3' />
                                <div id="mostrar"><b>Amanda Marques</b>
                                    <p>Sou uma mulher de família, forte, otimista e leal, não me deixo abater com as dificuldades da vida, luto pelos meus objetivos com muita garra e determinação aprendo com meus desafios e me reinvento  a cada aprendizado. Estou sempre em busca de conhecimento que me faça crescer profissionalmente e como ser humano.</p></div></div>
                            <a href="https://github.com/AmandaMFurtado" target="_blank" rel="noreferrer" >
                                <GitHubIcon className='redes1' />
                            </a>
                            <a href="andaemc@gmail.com" target="_blank">
                                <EmailIcon className='redes1' />
                            </a>
                            <a href="https://www.linkedin.com/in/amanda-marques-furtado/" target="_blank" rel="noreferrer">
                                <LinkedInIcon className='redes1' />
                            </a>
                        </Grid>
                        <Grid item xs={4} className='alinhar'>
                            <div id="passar_mouse">
                                <img src="https://i.imgur.com/KS5OGHd.jpg" alt='Bruno Felix' width="150" height="150" className='img3' />
                                <div id="mostrar"><b>Bruno Felix</b> <p>Um fanático por tecnologia e suas diretrizes em desenvolvimento, busco sempre estar atento a tendências tecnológicas e conhecer sobre os assuntos dos quais quero me especializar e agregar
                                    habilidades em minha carreira, tais como desenvolvimento de sistemas, cloud computing, banco de
                                    dados, gestão ágil entre outras.
                                </p></div>
                            </div>
                            <a href="https://github.com/Brunofelix2021" target="_blank" rel="noreferrer" >
                                <GitHubIcon className='redes1' />
                            </a>
                            <a href="bruno.felix.sousa@hotmail.com" target="_blank">
                                <EmailIcon className='redes1' />
                            </a>
                            <a href="https://www.linkedin.com/in/bruno-felix-souza-1b249b14b/" target="_blank" rel="noreferrer">
                                <LinkedInIcon className='redes1' />
                            </a>
                        </Grid>
                        <Grid item xs={4} className='alinhar'>
                            <div id="passar_mouse">
                                <img src="https://i.imgur.com/5dVrzyQ.jpg" alt='Cibele França' width="150" height="150" className='img3' />
                                <div id="mostrar"><b>Cibele França</b><p>
                                    Sou uma pessoa bastante comunicativa e extrovertida, por isso, gosto de fazer o lugar no qual estou um lugar engraçado e descontraído. Gosto de sair com meus amigos, assistir séries e ouvir músicas.

                                    Procuro sempre estar aprendendo sobre tudo, novas culturas, novas histórias. Gosto muito de me comunicar com tudo, sou uma pessoa muito esforçada, se tem algo que eu não sei eu sempre faço de tudo para entender e aprender, e por meio da tecnologia pretendo ajudar o máximo de pessoas que eu conseguir.
                                </p></div></div>
                            <a href="https://github.com/cibelefranca" target="_blank" rel="noreferrer" >
                                <GitHubIcon className='redes1' />
                            </a>
                            <a href="cibeletessinha@gmail.com" target="_blank">
                                <EmailIcon className='redes1' />
                            </a>
                            <a href="https://www.linkedin.com/in/cibele-fran%C3%A7a-55157520a/" target="_blank" rel="noreferrer">
                                <LinkedInIcon className='redes1' />
                            </a>
                        </Grid>
                        <Grid item xs={3} className='alinhar'>
                            <div id="passar_mouse">
                                <img src="https://imgur.com/3zTAXAL.jpg" alt='Iago Vieira' width="150" height="150" className='img3' />
                                <div id="mostrar"><b>Iago Vieira</b>
                                    <p>Tenho 21 anos e sou um apaixonado por tecnologia. Procuro sempre me mantar informado nas novas tecnologias do mercado e me aperfeiçoar mais. Espero contribuir para um mundo cada vez mais integrado e conectado</p></div></div>
                            <a href="https://github.com/IagoVieiraa" target="_blank" rel="noreferrer" >
                                <GitHubIcon className='redes1' />
                            </a>
                            <a href="iago.vieiras13@gmail.com" target="_blank">
                                <EmailIcon className='redes1' />
                            </a>
                            <a href="https://www.linkedin.com/in/iago-vieira-499076165/" target="_blank" rel="noreferrer">
                                <LinkedInIcon className='redes1' />
                            </a>
                        </Grid>
                        <Grid item xs={3} className='alinhar'>
                            <div id="passar_mouse">
                                <img src="https://i.imgur.com/lVwgmAG.jpg" alt='Lucas Oi' width="150" height="150" className='img3' />
                                <div id="mostrar"><b>Lucas Oi</b>
                                    <p> Formado como pessoa desenvolvedora Fullstack Java JR. pela Generation Brasil, além de cursar o 6º ciclo de engenharia elétrica, estou sempre em busca de novos desafios, gosto de café, estar na natureza e tocar violão.</p></div></div>
                            <a href="https://github.com/LucasOii" target="_blank" rel="noreferrer" >
                                <GitHubIcon className='redes1' />
                            </a>
                            <a href="lucas.oi-@hotmail.com" target="_blank">
                                <EmailIcon className='redes1' />
                            </a>
                            <a href="https://www.linkedin.com/in/lucas-de-oliveira-oi/" target="_blank" rel="noreferrer">
                                <LinkedInIcon className='redes1' />
                            </a>
                        </Grid>
                        <Grid item xs={3} className='alinhar'>
                            <div id="passar_mouse">
                                <img src="https://i.imgur.com/OhuIOWe.jpg" alt='Vitoria Oliveira' width="150" height="150" className='img3' />
                                <div id="mostrar"><b>Vitoria Oliveira</b><p>Desenvolvedora Full Stack Java Jr, estudante de Engenharia da Computação. Busco sempre novos conhecimentos, Tenho facilidade em me adaptar a novas rotinas, gosto de resolver problemas e gosto de trabalhar em equipe.
                                </p></div></div>
                            <a href="https://github.com/viisoli" target="_blank" rel="noreferrer" >
                                <GitHubIcon className='redes1' />
                            </a>
                            <a href="contato.santos.vitoria12@gmail.com" target="_blank">
                                <EmailIcon className='redes1' />
                            </a>
                            <a href="https://www.linkedin.com/in/vit%C3%B3ria-santos-oliveira-53755b189/" target="_blank" rel="noreferrer">
                                <LinkedInIcon className='redes1' />
                            </a>
                        </Grid>
                        <Grid item xs={3} className='alinhar'>
                            <div id="passar_mouse">
                                <img src="https://i.imgur.com/yS7HM9o.jpg" alt='Vitoria Romão' width="150" height="150" className='img3' />
                                <div id="mostrar"><b>Vitoria Romão</b><p>Adoro desafios que aumentam meu horizonte e mudam meu modo de ver a vida, por esse motivo decidi fazer a transição de carreira. Sou uma pessoa criativa, que ama novos conhecimentos, e com isso me encontrei como desenvolvedora. Acredito que levarei boa parte da minha bagagem adquirida nessa nova etapa da minha jornada.</p></div></div>
                            <a href="https://github.com/vitoriaromao" target="_blank" rel="noreferrer" >
                                <GitHubIcon className='redes1' />
                            </a>
                            <a href="vitoria.rmoura2@hotmail.com" target="_blank" >
                                <EmailIcon className='redes1' />
                            </a>
                            <a href="https://www.linkedin.com/in/vit%C3%B3ria-santos-oliveira-53755b189/" target="_blank" rel="noreferrer">
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