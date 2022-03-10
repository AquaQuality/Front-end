import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button, Grid } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom'
import './CadastroTema.css';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Services';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';
import { toast } from 'react-toastify';

function CadastroTema() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    const [tema, setTema] = useState<Tema>({
        id: 0,
        categoriaPostagem: '',
        descricao: ''
    })

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

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            put(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema atualizado com sucesso', {
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
            post(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema cadastrado com sucesso', {
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
        back()

    }

    function back() {
        history.push('/temas')
    }

    return (

        <Container maxWidth="sm" className="topo" >
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h3" align="center" className='text-tema' >Criar tema</Typography>
                <TextField value={tema.categoriaPostagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
                    id="categoriaPostagem" label="Tema" variant="outlined" name="categoriaPostagem" margin="normal" placeholder='Insira o tema' required fullWidth />

                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
                    id="descricao" label="Descrição" variant="outlined" name="descricao" margin="normal" placeholder='Descreva o tema' required fullWidth />

                <Button type="submit" variant="contained" color="primary" className='bnt-criar'>
                    Criar
                </Button>
            </form>
        </Container>

    )
}

export default CadastroTema;