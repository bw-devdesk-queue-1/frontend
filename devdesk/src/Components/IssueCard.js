import React, { useState } from "react";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";

import {getData} from '../actions'

export default function IssueCard(props) {
  return (
    <Card>
    Issue Card Test
      <h2><Link to={`/issues/${props.id}`}>{props.title}</Link></h2>
      <div>{props.content}</div>
    </Card>
  );
}
