import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function Registar(){
    const [account,setAccount] = useState({
        username:'',
        password:''
    } )
    // use axios post to the backend to add the accounts to the database. using on submit...... also then redirect to the login page   !!! need to look that up!!!!

    return(
        <form>

        {/* <TextField id='outlined-basic' label='First Name' variant='outlined' />
        <TextField id='outlined-basic' label='Last Name' variant='outlined' /> */}
        <TextField id='outlined-basic' label='Username' variant='outlined' />
        <TextField id='outlined-basic' label='Password' variant='outlined' />

        <Button size='large' variant='contained' color='primary'>
        Create Account
        </Button>
        </form>
    )
    


}