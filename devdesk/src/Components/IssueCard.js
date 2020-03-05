import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Link,
  Typography
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { deleteData } from "../actions";
import { connect } from "react-redux";

function IssueCard(props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h3">{props.ticket.title}</Typography>
        <Typography variant="body1">{props.ticket.description}</Typography>
      </CardContent>
      <CardActions>
        <Button component={RouterLink} to={`/issues/${props.ticket.id}`}>
          See Issue
        </Button>
      </CardActions>
    </Card>
  );
}

export default connect(null, { deleteData })(IssueCard);
