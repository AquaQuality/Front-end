import React from 'react';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sobrenos from './paginas/sobrenos/Sobrenos';
import Contato from './paginas/contato/Contato';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listaTema/ListaTema';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import Perfil from './paginas/perfil/Perfil';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store/store';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
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
