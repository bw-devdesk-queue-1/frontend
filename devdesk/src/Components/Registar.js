import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Radio } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default function Registar(){
    const [account,setAccount] = useState({
        username:'',
        password:'',
        userType:''

    } );

    const iChangeStuff = event => {
        setAccount({...account,[event.target.name]:event.target.value})
    };
    // use axios post to the backend to add the accounts to the database. using on submit...... also then redirect to the login page   !!! need to look that up!!!!

    return(
        <form>

        {/* <TextField id='outlined-basic' label='First Name' variant='outlined' />
        <TextField id='outlined-basic' label='Last Name' variant='outlined' /> */}
        <Grid 
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        >
        <FormLabel>Create your account <br></br>Enter your information</FormLabel>
        <TextField id='outlined-basic' label='Username' variant='outlined' name='username' />
        <TextField id='outlined-basic' label='Password' variant='outlined' name='password' />
        <FormControl>Choose your role!</FormControl>
        <RadioGroup aria-label='Role' name =''>
            <FormControlLabel type='number' value='1' control={<Radio/>} label='Helper'/>
            <FormControlLabel type='number' value='0' control={<Radio/>} label='Student'/>
        </RadioGroup>

        <Button type='sumbit' size='large' variant='contained' color='primary'>
        Create Account
        </Button>
        </Grid>
        </form>
    )
    


}