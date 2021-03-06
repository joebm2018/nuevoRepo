import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Pabellon from './components/pabellon/Pabellon';
import Reserva from './components/reserva/Reserva';
import Registro from './components/registro/Registro';
import EditarPabellon from './components/editarPabellon/EditarPabellon';
import PageError from './components/PageError/PageError';

import AuthService from './services/Auth';
import Login from './components/login/login';
// AuthService
// importando enrutamiento
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

export default class App extends Component {

  _sAuth = new AuthService();
  
  constructor(props){
    super(props);
    if (this._sAuth.isLoged()){
      this.state={
        isLoged:true
      }
    }else{
      this.state={
        isLoged:false
      }
    }
  }
  signin=(email,pass)=>{
    this._sAuth.login(email,pass).then(rpta =>{
        console.log(rpta);
        if (rpta.status==200){
            this._sAuth.guardarToken(rpta.token);
            this.setState({
              isLoged:true
            })
        }
        
    })
}

  render() {
    return (
      <Fragment>
        {/* Todos los componentes que van a estar 
        afectos al sistema de enrutamiento, deben estar en el
        componente Router */}
        <Router>

          <Header />
          {/* El componente Switch es como un <router-outlet> en Angular */}
          <Switch>
            <Route exact path={"/"} component={Login} render={()=>{
              if (this.state.isLoged){
                return <Redirect to={{pathname:'/pabellones'}} />
              }else{
                return <Login signin={this.signin} />
                
              }
            }}/>
            <Route exact path={"/pabellones"} component={Pabellon} />
            <Route exact path={"/reservas"} component={Reserva} />
            <Route exact path={"/registro"} component={Registro} />
            <Route exact path={"/pabellones/:pabId/edit"} component={EditarPabellon}/>
            <Route component={PageError}/>
          </Switch>
        </Router>
      </Fragment>
    )
  }
}
