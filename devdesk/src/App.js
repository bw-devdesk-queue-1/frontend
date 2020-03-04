import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { getData } from "./actions";
import Login from "./Components/Login";
import IssueList from "./Components/IssueList";
import Registar from "./Components/Registar";

function App(props) {
  return (
    <div className="App">
      <button onClick={props.getData}>Refresh Issue List</button>
      <Switch>
        <Route
          path="/issues"
          render={renderProps => (
            <IssueList {...renderProps} issues={props.issues} />
          )}
        />
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
