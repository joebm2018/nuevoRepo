import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Pabellon from './components/pabellon/Pabellon';
import Reserva from './components/reserva/Reserva';
import Registro from './components/registro/Registro';



// importando enrutamiento
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* todo los componentes que van a estar inmersos deeben estar en el componente Router
        */} 
        <Router>
          <Header />
          {/*
          el componente switch es como un <router-oulet>
          */}
          <Switch>
            <Route exact path={"/pabellones"} component={Pabellon}/>
            <Route exact path={"/reserva"} component={Reserva}/>
            <Route exact path={"/registro"} component={Registro}/>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}
