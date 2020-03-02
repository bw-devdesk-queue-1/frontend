import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Queue from './Components/Queue';
import Registar from './Components/Registar' 

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/queue" component={Queue}/>
        <Route path="/registar" component={Registar}/>
        <Route exact path="/" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
