import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Services';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';

function CadastroUsuario() {

    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha === user.senha && user.senha.length >= 8) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuario cadastrado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informa????es de cadastro.', {
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
        <Grid container direction='row' justifyContent='center' alignItems='center' className='root2' xs={12}>
      <CssBaseline />
        <div className='paper2' >
            <img src="https://i.imgur.com/U8cvwuV.png" alt="logo"/>
                <Box paddingX={5} className='box'>
                    
                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastre-se</Typography>

                    <form onSubmit={onSubmit} className=''>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth placeholder='Insira o seu nome completo' required />

                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='foto' label='Foto' variant='outlined' name='foto' margin='normal' fullWidth placeholder='Insira um link para imagem'  />

                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth placeholder='Insira um e-mail' required />

                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth placeholder='Insira no minimo 8 caracteres' required />

                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id='confirmarSenha' label='Confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth placeholder='Insira no minimo 8 caracteres' required />

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='botao-cancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary' className='botao-cadastrar'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
                </div>
            </Grid>
    );
}

export default CadastroUsuario;