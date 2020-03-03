import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import IssueCard from "./IssueCard";
import Issue from "./Issue";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

const URL = `https://dev2desk.herokuapp.com/api/tickets`;

export default function IssueList({ match }) {
  const [issues, setIssues] = useState(null);

  useEffect(() => {
    axios
      .get(URL)
      .then(res => setIssues(res.data))
      .catch(err => console.log("Failed to retrieve issues: ", err));
  }, []);

  let list = null;
  if (issues != null) {
    list = issues.map(issue => <IssueCard key={issue.id} {...issue} />);
  }

  return (
    <Container>
      <Switch>
        <Route exact path={`${match.path}`}>
          {list !== null ? list : <p>Loading...</p>}
        </Route>
        <Route path={`${match.path}/:id`} component={Issue} />
      </Switch>
    </Container>
  );
}
