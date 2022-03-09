import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './ListaTema.css';
import Tema from '../../../models/Tema';
import { busca } from '../../../services/Services';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';
import { toast } from 'react-toastify';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  let history = useHistory();

  useEffect(() => {
    if (token === "") {
      toast.error('Você precisa estar logade!', {
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

  async function getTema() {
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getTema()
  }, [temas.length])

  return (
    <>
      {
        temas.map(tema => (

          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom className='text'>
                  Tema
                </Typography>
                <Typography variant="h5" component="h2">
                  {tema.categoriaPostagem}
                </Typography>
                <Typography color="textSecondary" gutterBottom className='text'>
                  Descricao
                </Typography>
                <Typography variant="h5" component="h4">
                  {tema.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="botao-temas" size='small' color="primary" >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary" className="botao-temas" >
                        Deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))}
    </>
  );
}


export default ListaTema;