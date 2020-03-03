import React from "react";
import { Container } from "@material-ui/core";
import IssueCard from "./IssueCard.js";

export default function Queue({ issues }) {
  return (
    <Container>
      {issues.map(issue => (
        <IssueCard key={issue.id} {...issue} />
      ))}
    </Container>
  );
}
