import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from './Components/PrivateRoute';
import { connect } from "react-redux";
import { getData } from "./actions";
import Login from "./Components/Login";
import IssueList from "./Components/IssueList";
import Registar from "./Components/Registar";
import CreateIssue from "./Components/CreateIssue";

function App(props) {
  return (
    <div className="App">
      <button onClick={props.getData}>Refresh Issue List</button>
      <Switch>
        <PrivateRoute
          path="/issues"
          component={IssueList} />
        />
        <PrivateRoute path="/createIssue" component={CreateIssue} />
        <Route path="/registar" component={Registar} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    issues: state.data
  };
};

export default connect(mapStateToProps, { getData })(App);
