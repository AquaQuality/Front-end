import React from 'react';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sobrenos from './paginas/sobrenos/Sobrenos';
import Contato from './paginas/contato/Contato';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <div>
          <Route exact path='/'>
              <Home />
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
         <Route path='/cadastro'>
              <CadastroUsuario />
          </Route>
          </div>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
