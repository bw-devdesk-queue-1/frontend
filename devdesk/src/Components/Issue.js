import React from "react";
import { Container } from "@material-ui/core";
import IssueCard from "./IssueCard.js";
import { useParams } from "react-router-dom";

export default function Queue({ issues }) {
  const params = useParams();
  const issue = issues[params.id];
  return (
    <Container>
      <IssueCard {...issue} />
    </Container>
  );
}
