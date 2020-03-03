import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import IssueCard from "./IssueCard.js";
import axios from "axios";

const URL = `https://dev2desk.herokuapp.com/api/tickets`;

export default function IssueList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then(res => setIssues(res.data))
      .catch(err => console.log("Failed to retrieve issues: ", err));
  }, []);

  return (
    <Container>
      {issues.map(issue => (
        <IssueCard key={issue.id} {...issue} />
      ))}
    </Container>
  );
}
