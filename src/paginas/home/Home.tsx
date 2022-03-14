import React, { useEffect } from 'react';
import { Typography, Box, Grid} from '@material-ui/core';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/user/userReducer';
import { toast } from 'react-toastify';
import Perfil from '../perfil/Perfil';
import ModalTema from '../../components/temas/modalTema/ModalTema'
import ListaPostagem from '../../components/postagens/listaPostagem/ListaPostagem';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CommentIcon from '@mui/icons-material/Comment';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import EventIcon from '@mui/icons-material/Event';


function Home() {

    let history = useHistory();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token === "") {
            toast.error('Você precisa estar logado', {
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
            <Grid container spacing={2} direction="row" justifyContent="center" className='caixa'>

                <Grid alignItems="center" direction="column" item xs={4} className='paperpost'>

                    <Box className='perfil'>
                        <Perfil />
                    </Box>
                    <Box alignItems='Center' className='box-icones'>
                        <ul>
                       
                       <br/>
                       <Typography> <GroupIcon />Grupos </Typography>
                       <br/>
                       <Typography> <EventIcon/>Eventos </Typography>
                       <br/>
                       <Typography> <VolunteerActivismIcon/>Doações </Typography>
                       <br/>
                       <Typography variant='h6' component="h6"> <CommentIcon/> Mensagens </Typography>
                       </ul>
                    
                    </Box>
                    <Box alignItems='' >
                    <img className='imagem-perfil' src="https://i.imgur.com/fflDO4i.png" alt="logo" />
            </Box>
                </Grid>

                <Grid xs={7} className='caixa'>
                <Box  className="criar-post">
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" >Comece uma nova publicação:</Typography>
                        <Box display="flex" justifyContent="center">
                        <Box marginRight={1} className='botao' >
                            <ModalPostagem />
                        </Box>
                        <Box marginRight={1} className='botao' >
                        <ModalTema />
                        </Box>
                    </Box>
                    </Box>
                    
                    <ListaPostagem />
                </Grid >

            </Grid>
        </>
    );
}

export default Home; 