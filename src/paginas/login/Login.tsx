import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { login } from "../../services/Services";
import UserLogin from "../../models/UserLogin";
import './Login.css';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

//import { addToken } from "../../store/tokens/actions";
import { addToken, addId } from "../../store/user/action";


import LoginIcon from '@mui/icons-material/Login';


function Login() {
  let history = useHistory();
  const dispatch = useDispatch();
  //const [token, setToken] = useState('');

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    token: "",
    foto: ""
})

// Crie mais um State para pegar os dados retornados a API
const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    id: 0,
    nome:'',
    usuario: '',
    senha: '',
    token: '',
    foto: ""
})

function updatedModel(e: ChangeEvent<HTMLInputElement>) {
  setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value           
  })
}
  
useEffect(() => {
  if(respUserLogin.token !== ""){

      // Verifica os dados pelo console (Opcional)
      console.log("Token: " + respUserLogin.token)
      console.log("ID: " + respUserLogin.id)

      // Guarda as informações dentro do Redux (Store)
      dispatch(addToken(respUserLogin.token)) 
      dispatch(addId(respUserLogin.id.toString()))    // Faz uma conversão de Number para String
      history.push('/home')
  }
}, [respUserLogin.token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {

      await login(`/usuarios/logar`, userLogin, setRespUserLogin)
        toast.success('Usuário logado com sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });

    } catch (error) {
      toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
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
    <Grid container direction='row' justifyContent='center' alignItems='center' className='root' xs={12}>
        <div className='paper'>
            <img src="https://trello.com/1/cards/6225f916e75ffb899608d7b8/attachments/6227abd045822c7f9ef4f192/previews/6227abd145822c7f9ef4f1ba/download/vetorlogobolinha1.png" alt=""/>

          <Typography component="h1" variant="h3" className="text"> Entrar </Typography>

          <form onSubmit={onSubmit} className='form' noValidate>

            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario" label="Usuario" name="usuario" autoComplete="usuario" variant="outlined" margin="normal" autoFocus required fullWidth />

            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha" label="Senha" name="senha" type="password" variant="outlined" margin="normal" autoComplete="current-password" required fullWidth />


            <Button type="submit" fullWidth variant="contained" color="primary" className='submit'><LoginIcon fontSize="large"/></Button>

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
  );
}

export default Login;