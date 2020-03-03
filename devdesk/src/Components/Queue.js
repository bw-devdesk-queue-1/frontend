import React, { useState } from "react";
import { Container, TextField } from "@material-ui/core";
import IssueCard from "./IssueCard.js";

export default function Queue() {
  const [issues, setIssues] = useState([
    { title: "Hello, world!", content: "I can say hello." },
    {
      title: "Live share doesn't work",
      content:
        "I installed the thing but then it says not enough stuff is installed. :/"
    }
  ]);
  return (
    <Container>
      {issues.map(issue => (
        <IssueCard {...issue} />
      ))}
    </Container>
  );
}
