import React from "react";
import { Container } from "@material-ui/core";
import IssueCard from "./IssueCard";
import Issue from "./Issue";
import { Switch, Route } from "react-router-dom";

export default function IssueList(props) {
  const { match } = props;
  const issues = props.issues || null;

  return (
    <Container>
      <Switch>
        <Route exact path={`${match.path}`}>
          {issues !== null ? (
            issues.map(issue => <IssueCard key={issue.id} {...issue} />)
          ) : (
            <p>Loading...</p>
          )}
        </Route>
        <Route
          path={`${match.path}/:id`}
          render={renderProps => <Issue {...renderProps} issues={issues} />}
        />
      </Switch>
    </Container>
  );
}
