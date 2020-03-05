import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from './Components/PrivateRoute';
import { connect } from "react-redux";
// import { getData } from "./actions";
import Login from "./Components/Login";
import IssueList from "./Components/IssueList";
import Registar from "./Components/Registar";
import CreateIssue from "./Components/CreateIssue";
import UpdateIssue from "./Components/UpdateIssue";

function App(props) {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute
          path="/issues"
          component={IssueList} />
        />
        <PrivateRoute path="/createIssue" component={CreateIssue} />
        <PrivateRoute path="/updateIssue/:id" component={UpdateIssue} />
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

export default connect(mapStateToProps, {})(App);
