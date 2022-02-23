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

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div>
<<<<<<< HEAD
          <Route exact path='/'>
              <Login />
          </Route>
          
        <Route path='/login'>
=======
          <Route path='/login'>
>>>>>>> ac0a88492a3920ba0030b0db5cd762fb3d069731
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
          </div>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
