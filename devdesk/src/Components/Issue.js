import React, { useState, useEffect } from "react";
import { Container, Card } from "@material-ui/core";
import IssueCard from "./IssueCard.js";
import { useParams } from "react-router-dom";
import axios from "axios";

const getURL = id => `https://dev2desk.herokuapp.com/api/tickets/${id}`;

export default function Issue({ issues }) {
  const params = useParams();
  const [issue, setIssue] = useState(null);

  useEffect(() => {
    axios
      .get(getURL(params.id))
      .then(res => setIssue(res.data))
      .catch(err => console.log("Failed to retrieve issue: ", err));
  }, [params.id]);

  return (
    <Container>
      {issue !== null ? (
        <IssueCard {...issue} />
      ) : (
        <Card>
          <p>Loading...</p>
        </Card>
      )}
    </Container>
  );
}
