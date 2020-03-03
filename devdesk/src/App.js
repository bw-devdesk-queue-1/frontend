import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Issue from "./Components/Issue.js";
import IssueList from "./Components/IssueList";
import Registar from "./Components/Registar";

function App() {
  const [issues, setIssues] = useState([
    { id: 0, title: "Hello, world!", content: "I can say hello." },
    {
      id: 1,
      title: "Live share doesn't work",
      content:
        "I installed the thing but then it says not enough stuff is installed. :/"
    }
  ]);
  return (
    <div className="App">
      <Switch>
        <Route
          path="/issues/:id"
          render={props => <Issue {...props} issues={issues} />}
        />
        <Route
          path="/issues"
          render={props => <IssueList {...props} issues={issues} />}
        />
        <Route path="/registar" component={Registar} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
