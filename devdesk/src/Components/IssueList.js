import React from "react";
import { Container } from "@material-ui/core";
import IssueCard from "./IssueCard";
import Issue from "./Issue";
import { Switch, Route, Link } from "react-router-dom";
import { getData } from "../actions"
import { connect } from 'react-redux';

function IssueList(props) {
  const { match } = props;
  const issues = props.issues || null;

  return (
    <Container>
      <button onClick={props.getData}>Refresh Issue List</button>
      <Link to="/createIssue">Create New Issue</Link>
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

const mapStateToProps = state => {
  return {
    issues: state.data
  }
}

export default connect(mapStateToProps, { getData })(IssueList)


