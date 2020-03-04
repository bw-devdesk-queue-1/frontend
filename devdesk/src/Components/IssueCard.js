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
      <h3>Description</h3>
      <div>{props.ticket.description}</div>

      <h3>Tried</h3>
      <div>{props.ticket.tried}</div>

      <h3>Category</h3>
      <div>{props.ticket.category}</div>

      <div>
        <button>Edit</button>
        <button onClick={() => props.deleteData(props.ticket.id)}>Delete</button>
      </div>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    issues: [...state.data]
  }
}

export default connect(mapStateToProps, { deleteData })(IssueCard)
