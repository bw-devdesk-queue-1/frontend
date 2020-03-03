import React, { useState } from "react";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function IssueCard(props) {
  return (
    <Card>
      <h2><Link to={`/issues/${props.id}`}>{props.title}</Link></h2>
      <div>{props.content}</div>
    </Card>
  );
}
