import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Box, Typography, TextField, Button, Avatar, Checkbox } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from "react-use-localstorage";
import { login } from "../../services/Services";
import UserLogin from "../../models/UserLogin";
import './Login.css';

function Login() {
    let history = useHistory();
    const [token, setToken] = useLocalStorage('token')
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
            history.push('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            alert("Usuário logado com sucesso !")
        } catch (error) {
            alert("Dados do usuário inconsistentes. Erro ao logar !")
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='root'>
            <CssBaseline />

            <Grid alignItems='center' xs={6} className='imagem'>
            </Grid>
            
            <Grid item xs={6} alignItems='center' >

                <div className='paper'>
                    <Avatar className='avatar'>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography component="h1" variant="h3" className="text">Entrar</Typography>

                    <form onSubmit={onSubmit} className='form' noValidate>

                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="usuario" label="Email" name="usuario" autoComplete="email" variant="outlined" margin="normal" required fullWidth autoFocus />

                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="password" label="Senha" name="senha" type="password" autoComplete="current-password" variant="outlined" margin="normal" required fullWidth />

                        <Button type="submit" fullWidth variant="contained" color="primary" className='submit'>Logar</Button>

                        <Box mt={5}>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={1}>
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