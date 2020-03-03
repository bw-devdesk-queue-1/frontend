import React, { useState } from 'react';
import {connect} from 'react-redux';
import {login, register} from '../actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const sampleData = {
    username: 'John',
    password: 'password',
    // userType: 'student'
}




function Login(){
    const [user,setUser] = useState();
    const iChangeStuff = event => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    //use axios get to pull the user info back, John said that he will handle the authentication   !!! get with John to make sure this is correct  !!!

    return(
        
        
        <form onSubmit={iChangeStuff}>
        <Grid 
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        >
        <Button variant='contained' color='primary'>
        Helper
        </Button>
        <Button variant='contained' color='primary'>
        Student
        </Button>

        <TextField id='outlined-basic' label='Username' variant='outlined'  onChange={event => iChangeStuff(event)}/>
        <TextField id='outlined-basic' label='Password' variant='outlined' onChange={event => iChangeStuff(event)} />

        <Button onClick={login(sampleData)} size='large' variant='contained' color='primary'>
        Login
        </Button>
        </Grid>
        </form>
        
        
    )
}

const mapStateToProps = state => {
    return {
        credentials: state.credentials,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {login, register})(Login);
