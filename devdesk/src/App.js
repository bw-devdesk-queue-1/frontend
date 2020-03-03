import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import IssueList from "./Components/IssueList";
import Registar from "./Components/Registar";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/issues" component={IssueList} />
        <Route path="/registar" component={Registar} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
