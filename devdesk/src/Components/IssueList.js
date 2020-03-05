import React, { useEffect, useState } from "react";
import {
  Container,
  Link,
  Grid,
  Breadcrumbs,
  Typography,
  Button
} from "@material-ui/core";
import IssueCard from "./IssueCard";
import Issue from "./Issue";
import Categories from "./Categories";
import { getStudentData, getAllData } from "../actions";
import { connect } from "react-redux";
import { Switch, Route, Link as RouterLink } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import qs from "qs";

function IssueList(props) {
  const { match } = props;
  const issues = props.issues || null;
  const [categories, setCategories] = useState(null);
  const [filtered, setFiltered] = useState(issues);

  const queryParams = qs.parse(props.location.search, {
    ignoreQueryPrefix: true
  });

  // Using axios outside of redux so that I can meet MVP for using
  // useEffect and whatnot. --LeRoyce
  useEffect(() => {
    axiosWithAuth()
      .get("/api/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.log("Failed to retrieve categories: ", err));
  }, []);

  useEffect(() => {
    if (issues !== null && queryParams.category !== undefined) {
      const newFiltered = issues.filter(x =>
        x.ticket.category
          .toLowerCase()
          .includes(queryParams.category.toLowerCase())
      );
      setFiltered(newFiltered);
    } else {
      setFiltered(issues);
    }
  }, [issues, queryParams.category]);


  const studentId = (Number(window.localStorage.getItem("id")))
  const userType = (Number(window.localStorage.getItem("userType")))

  const filterByUserType = () => {
    if (userType === 0) {
      props.getStudentData(studentId);
    } else {
      props.getAllData();
    }
  }

  return (
    <Container>
      <Switch>
        <Route exact path={`${match.path}`}>
          <Breadcrumbs>
            <Link color="inherit" component={RouterLink} to={`/`}>
              Home
            </Link>
            <Typography color="textPrimary">Issues</Typography>
          </Breadcrumbs>

          <Grid
            container
            justify="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Categories
                categories={categories}
                match={match}
                history={props.history}
                activeCategory={queryParams.category}
              />
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <Button variant="contained" onClick={() => filterByUserType()}>
                    Refresh
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    component={RouterLink}
                    variant="contained"
                    color="primary"
                    to="/createIssue"
                  >
                    Create New Issue
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container justify="center" spacing={2}>
            {filtered !== null ? (
              filtered.map(issue => (
                <Grid item key={issue.ticket.id}>
                  <IssueCard {...issue} />
                </Grid>
              ))
            ) : (
                <p>Loading...</p>
              )}
          </Grid>
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

export default connect(mapStateToProps, { getStudentData, getAllData })(IssueList);
