import React from "react";
import {
  Paper,
  Card,
  CardContent,
  CardActions,
  Breadcrumbs,
  Button,
  Link,
  Typography
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { deleteData } from "../actions"
import { connect } from 'react-redux';

function Issue(props) {
  const params = useParams();
  let issue = null;
  if (props.issues !== null) {
    // Params returns a string id, and the server returns an integer.
    // I decided to convert everything to a string, just in case we ever
    // decide to change the id to a string
    //
    // Or something like that.
    issue = props.issues.filter(x => x.ticket.id.toString() === params.id)[0];
  }

  const deleteIssue = (id) => {
    props.deleteData(id)
    props.history.push("/issues")
  }

  console.log(issue)

  return (
    <>
      <Breadcrumbs>
        <Link color="inherit" component={RouterLink} to={`/`}>
          Home
        </Link>
        <Link color="inherit" component={RouterLink} to={`/issues`}>
          Issues
        </Link>
        <Typography color="textPrimary">{params.id}</Typography>
      </Breadcrumbs>

      {issue !== null && issue !== undefined ? (
        <Card>
          <CardContent>
            <Typography variant="h2">{issue.ticket.title}</Typography>
            <Typography variant="body1">{issue.ticket.description}</Typography>

            <Typography variant="h3">Tried</Typography>
            <div>{issue.ticket.tried}</div>

            <Typography variant="h3">Category</Typography>
            <Typography>{issue.ticket.category}</Typography>
          </CardContent>

          <CardActions>
            <RouterLink to={`/updateIssue/${issue.ticket.id}`}>Edit</RouterLink>
            <button onClick={() => deleteIssue(issue.ticket.id)}>
              Delete
            </button>
          </CardActions>
        </Card>
      ) : (
          <Card textAlign="center">
            <CardContent>
              <Typography variant="h6">Loading...</Typography>
            </CardContent>
          </Card>
        )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    issues: [...state.data]
  }
}

export default connect(mapStateToProps, { deleteData })(Issue)
