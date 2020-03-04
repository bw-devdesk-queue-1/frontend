import React from "react";
import {
  Container,
  Card,
  Link,
  Breadcrumbs,
  Typography
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

export default function Issue(props) {
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

  return (
    <>
      <Breadcrumbs>
        <Link color="inherit" component={RouterLink} to={`/issues`}>
          Issues
        </Link>
        <Typography color="textPrimary">{params.id}</Typography>
      </Breadcrumbs>

      {issue !== null && issue !== undefined ? (
        <Card>
          <h2>
            <Link component={RouterLink} to={`/issues/${issue.ticket.id}`}>
              {issue.ticket.title}
            </Link>
          </h2>
          <div>{issue.ticket.description}</div>

          <h3>Tried</h3>
          <div>{issue.ticket.tried}</div>

          <h3>Category</h3>
          <div>{issue.ticket.category}</div>

          <div>
            <button>Edit</button>
            <button onClick={() => props.deleteData(issue.ticket.id)}>
              Delete
            </button>
          </div>
        </Card>
      ) : (
        <Card>
          <p>Loading...</p>
        </Card>
      )}
    </>
  );
}
