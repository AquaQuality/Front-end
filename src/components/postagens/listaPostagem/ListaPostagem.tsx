import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Services'
import { Box, Card, CardActions, CardContent, Button, Typography, CardMedia } from '@material-ui/core';
import './ListaPostagem.css';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  let history = useHistory();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
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

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>
      {
        posts.map(post => (

          <Box m={2} >
            <Card variant="outlined" className='post' >
              <CardContent>

                <Typography variant="h5" component="h2">
                  {post.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.texto}
                </Typography>
                <br></br>
                <Typography variant="body1" component="h5" className='text' >
                  Tema
                </Typography>
                <Typography variant="body2" component="p">
                  {post.tema?.categoriaPostagem}
                </Typography>
                <br />
                <Typography variant="body1" component="h5" className='text'>
                  Midia
                </Typography>
                <Typography variant="body2" className='midia'>
                  {/* <a href={post.midia} target="_blank" rel="noreferrer noopener">
                {post.midia}</a>  */}
                  <img src={post.midia} alt="" />
                </Typography>
                <br />
                <Typography variant="body1" component="h5" className='text'>
                  Usuario
                </Typography>
                <Typography variant="body2" component="p">
                  {post.usuario?.nome}
                </Typography>
              </CardContent>
              <CardActions>

                <Box display="flex" justifyContent="center" mb={1.5}>

                <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary" className="botao-postagens">
                      <FavoriteBorderIcon fontSize='large' className='favorite botao-postagens' />
                    </Button>
                </Box>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="botao-postagens" size='small' color="primary" >
                        <UpdateIcon fontSize='large' />
                      </Button>
                    </Box>
                  </Link>

                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary" className="botao-postagens">
                        <DeleteIcon fontSize='large' />
                      </Button>
                    </Box>
                  </Link>
                  
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListaPostagem;