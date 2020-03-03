import React from "react";
import { Container, Card } from "@material-ui/core";
import IssueCard from "./IssueCard.js";
import { useParams } from "react-router-dom";

export default function Issue({ issues }) {
  const params = useParams();
  let issue = null;
  if (issues !== null) {
    issue = issues[params.id];
  }

  return (
    <Container>
      {issue !== null && issue !== undefined ? (
        <IssueCard {...issue} />
      ) : (
        <Card>
          <p>Loading...</p>
        </Card>
      )}
    </Container>
  );
}
