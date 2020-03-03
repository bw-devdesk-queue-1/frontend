import React from "react";
import { Container, Card } from "@material-ui/core";
import IssueCard from "./IssueCard.js";
import { useParams } from "react-router-dom";

export default function Issue({ issues }) {
  const params = useParams();
  let issue = null;
  if (issues !== null) {
    // Params returns a string id, and the server returns an integer.
    // I decided to convert everything to a string, just in case we ever
    // decide to change the id to a string
    //
    // Or something like that.
    issue = issues.filter(x => x.id.toString() === params.id)[0];
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
