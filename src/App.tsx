import React from 'react';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sobrenos from './paginas/sobrenos/Sobrenos';
import Contato from './paginas/contato/Contato';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listaTema/ListaTema';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import Navbar from './components/estaticos/navbar/Navbar';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Switch>
        <div>

          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/sobrenos'>
            <Sobrenos />
          </Route>
          <Route path='/contato'>
            <Contato />
          </Route>
          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>
          <Route path='/temas'>
            <ListaTema />
          </Route>

          <Route path='/postagens'>
              <ListaPostagem />
            </Route>

          <Route exact path='/formularioTema'>
            <CadastroTema />
          </Route>
          <Route exact path='/formularioTema/:id'>
            <CadastroTema />
          </Route>
          <Route path='/deletarTema/:id'>
            <DeletarTema />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
