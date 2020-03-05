import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {Link} from 'react-router-dom';
import thumbnail from '../Images/phonenew.png'

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
      {/* <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        
      > */}
        {/* <Button variant="contained" color="primary">
          Helper
        </Button>
        <Button variant="contained" color="primary">
          Student
        </Button> */}
        <div className='loginContainer'>
        <img src={thumbnail}/>
        <div className='loginForm'>
          <h1>Welcome!</h1>
          <div className='boxes'>
          <div className='formFields'>
        <TextField id='outlined-basic' label='username' name="username" variant='outlined' onChange={event => iChangeStuff(event)} />
        <TextField id='outlined-basic' label='password' name="password" variant='outlined' onChange={event => iChangeStuff(event)} />
        </div>
        <Button onClick={(e) => {
          if(user.username < 1 && user.password < 1){
            e.preventDefault();
            return alert('Please enter your login information to continue')
          }
          props.login(user)
          props.history.push('/issues')
        }}
          size='large' variant='contained' color='primary' id='loginButton'>
          Login
        </Button>
        </div>

        <div className='redirectToCreate'>
            <p> If you do not already have an account please click the register button to create an account.</p>
            <Link to='/Registar'>
            <Button size='small' variant='contained' color='primary'> Register</Button>
            </Link>
        </div>
        </div>
        </div>
      {/* </Grid> */}
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
