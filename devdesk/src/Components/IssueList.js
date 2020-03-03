import React from "react";
import { Container } from "@material-ui/core";
import IssueCard from "./IssueCard";
import Issue from "./Issue";
import { Switch, Route } from "react-router-dom";

export default function IssueList(props) {
  const { match } = props;
  const issues = props.issues || null;

  let list = null;
  if (issues !== null) {
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
