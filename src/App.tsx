import React from 'react';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sobrenos from './paginas/sobrenos/Sobrenos';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listaTema/ListaTema';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import Navbar from './components/estaticos/navbar/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import 'react-toastify/dist/ReactToastify.css';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import Perfil from './paginas/perfil/Perfil';

function App() {

  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <Switch>
          <div style={{ minHeight: '100vh' }}>

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
            <Route path='/cadastrousuario'>
              <CadastroUsuario />
            </Route>
            <Route path='/temas'>
              <ListaTema />
            </Route>

            <Route path='/postagens'>
              <ListaPostagem />
            </Route>

            <Route exact path='/formularioPostagem'>
              <CadastroPost />
            </Route>

            <Route exact path='/formularioPostagem/:id'>
              <CadastroPost />
            </Route>

            <Route path='/deletarPostagem/:id'>
              <DeletarPostagem />
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

            <Route path='/perfil'>
              <Perfil />
            </Route>


          </div>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
