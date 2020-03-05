import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Radio } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import '../sass/index.scss';
import Queue from '../Images/hero.png'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

function Registar(props) {
    const [tickets, setTickets] = useState();
    const [account, setAccount] = useState({
        username: '',
        password: '',
        userType: Number()
    });

    const iChangeStuff = event => {
        setAccount({ ...account, [event.target.name]: event.target.value })
    };

    console.log(account)


    axios
        .get('https://dev2desk.herokuapp.com/api/tickets/')
        .then(res => setTickets(res.data.length))
        .catch(err => console.log("Failed to retrieve ticket count ", err));


    return (
        <form>

            {/* <TextField id='outlined-basic' label='First Name' variant='outlined' />
        <TextField id='outlined-basic' label='Last Name' variant='outlined' /> */}
            {/* <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
            > */}
            <div className='flexMe'>
            <img src={Queue}></img>
            <div className='mainContainer'>
                <h1>Create your account <br></br>Enter your information</h1>
                <div className='inputArea'>
                <TextField id='outlined-basic' label='Username' variant='outlined' name='username' onChange={event => iChangeStuff(event)} />
                </div>
                <div className='inputArea'>
                <TextField id='outlined-basic' type ='password' label='Password' variant='outlined' name='password' onChange={event => iChangeStuff(event)} />
                </div>
                <div className='radioContainer'>
                <FormControl>Choose your role!</FormControl>
                <RadioGroup aria-label='Role' name='userType' onChange={event => iChangeStuff(event)}>
                    <FormControlLabel type='number' value='1' control={<Radio />} label='Helper' />
                    <FormControlLabel type='number' value='0' control={<Radio />} label='Student' />
                </RadioGroup>
                </div>
                <Button onClick={() => {
                    if(account.password.length < 3){
                        return alert('Your password is not long enough')
                    }
                    props.register(account)
                    props.history.push('/')

                }}
                    size='large' variant='contained' color='primary'>
                    Create Account
        </Button>
        <div className='bottomRedirect'>
            <p> If you already have an account click the button to go to the login portal.</p>
            <Link to='/'>
            <Button size='small' variant='contained' color='primary'> To Login</Button>
            </Link>
        </div>
        </div >
        </div>
            {/* </Grid> */}
            <p className='counterP'>We are currently helping to resolve <span className='helping'>{tickets} </span>  issues</p>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        credentials: state.credentials
    }
}

export default connect(mapStateToProps, { register })(Registar)