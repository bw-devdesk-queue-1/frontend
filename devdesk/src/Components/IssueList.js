import React, { useEffect, useState } from "react";
import { Container, Link, Grid, Paper } from "@material-ui/core";
import IssueCard from "./IssueCard";
import Issue from "./Issue";
import { getData } from "../actions";
import { connect } from "react-redux";
import { Switch, Route, Link as RouterLink } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function IssueList(props) {
  const { match } = props;
  const issues = props.issues || null;
  const [categories, setCategories] = useState(null);

  // Using axios outside of redux so that I can meet MVP for using
  // useEffect and whatnot. --LeRoyce
  useEffect(() => {
    axiosWithAuth()
      .get("/api/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.log("Failed to retrieve categories: ", err));
  }, []);

  return (
    <Container>
      <button onClick={props.getData}>Refresh Issue List</button>
      <Link component={RouterLink} to="/createIssue">
        Create New Issue
      </Link>
      <Categories categories={categories} match={match} />
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
  };
};

export default connect(mapStateToProps, { getData })(IssueList);

function Categories(props) {
  if (props.categories !== null) {
    return (
      <Grid container justify="center">
        {props.categories.map((category, idx) => (
          <Paper key={idx}>
            <Link
              component={RouterLink}
              to={`${props.match.url}?category=${category}`}
            >
              {category}
            </Link>
          </Paper>
        ))}
      </Grid>
    );
  } else {
    return <div></div>;
  }
}
