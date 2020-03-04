import React from "react";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function IssueCard(props) {
  return (
    <Card>
      <h2>
        <Link to={`/issues/${props.id}`}>{props.title}</Link>
      </h2>
      <h3>Description</h3>
      <div>{props.description}</div>

      <h3>Tried</h3>
      <div>{props.tried}</div>

      <h3>Category</h3>
      <div>{props.category}</div>
    </Card>
  );
}
