import React from "react";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import { deleteData } from "../actions"
import { connect } from 'react-redux';

function IssueCard(props) {


  return (
    <Card>
      <h2>
        <Link to={`/issues/${props.ticket.id}`}>{props.ticket.title}</Link>
      </h2>
      <div>{props.ticket.description}</div>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    issues: [...state.data]
  }
}

export default connect(mapStateToProps, { deleteData })(IssueCard)
