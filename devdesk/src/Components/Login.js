import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const getLogin = {
  username: '',
  password: '',
}


function Login(props) {
  const [user, setUser] = useState(getLogin);
  const iChangeStuff = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  console.log(user)
  console.log(props)


  return (


    <form>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Button variant="contained" color="primary">
          Helper
        </Button>
        <Button variant="contained" color="primary">
          Student
        </Button>

        <TextField id='outlined-basic' label='username' name="username" variant='outlined' onChange={event => iChangeStuff(event)} />
        <TextField id='outlined-basic' label='password' name="password" variant='outlined' onChange={event => iChangeStuff(event)} />

        <Button onClick={() => {
          props.login(user)
          props.history.push('/issues')
        }}
          size='large' variant='contained' color='primary'>
          Login
        </Button>
      </Grid>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    credentials: state.credentials,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, { login })(Login);
