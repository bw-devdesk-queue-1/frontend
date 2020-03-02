import React, { useState } from "react";
import { connect } from "react-redux";
import { login, register } from "../actions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const sampleData = {
  username: "John",
  password: "password"
  // userType: 0
};

function Login() {
  const [user, setUser] = useState();

  //use axios get to pull the user info back, John said that he will handle the authentication   !!! get with John to make sure this is correct  !!!

  return (
    <form>
      <Button variant="contained" color="primary">
        Helper
      </Button>
      <Button variant="contained" color="primary">
        Student
      </Button>

      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />

      <Button
        onClick={login(sampleData)}
        size="large"
        variant="contained"
        color="primary"
      >
        Login
      </Button>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    credentials: state.credentials,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, { login, register })(Login);
