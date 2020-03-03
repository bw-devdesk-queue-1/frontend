import React, { useState } from "react";
import { Card } from "@material-ui/core";

export default function IssueCard(props) {
  return (
    <Card>
      <h2>{props.title}</h2>
      <div>{props.content}</div>
    </Card>
  );
}
