import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Box, Typography, TextField, Button, Avatar } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, useHistory } from 'react-router-dom';
import { login } from "../../services/Services";
import UserLogin from "../../models/UserLogin";
import './Login.css';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";

function Login() {
  let history = useHistory();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      usuario: '',
      senha: '',
      token: ''
    })

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }
  
  useEffect(() => {
    if (token != '') {
      dispatch(addToken(token))
      history.push('/home')
    }
  }, [token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setToken)

      toast.success('Usuario logade com sucesso!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
      });
  }catch{
      toast.error('Dados do usuário inconsistentes. Erro ao logar', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
      });
    }
  }

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' className='root'>
      <CssBaseline />
      <Grid alignItems='center' xs={6} className='imagem'> </Grid>

      <Grid item xs={6} >

        <div className='paper'>
          <Avatar className='avatar'>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h3" className="text"> Entrar </Typography>

          <form onSubmit={onSubmit} className='form' noValidate>

            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario" label="Usuario" name="usuario" autoComplete="usuario" variant="outlined" margin="normal" autoFocus required fullWidth />

            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha" label="Senha" name="senha" type="password" variant="outlined" margin="normal" autoComplete="current-password" required fullWidth />


            <Button type="submit" fullWidth variant="contained" color="primary" className='submit'>Logar</Button>

            <Box mt={5}>
            </Box>
          </form>
          <Box display='flex' justifyContent='center' marginTop={2}>
            <Box marginRight={1}>
              <Typography variant='subtitle1' gutterBottom align='center' className="texto" >Não tem uma conta?</Typography>
            </Box>
            <Link to='/cadastrousuario' className='text-decorator-none' >
              <Typography variant='subtitle1' gutterBottom align='center' className='text'> Cadastre-se</Typography>
            </Link>

          </Box>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;