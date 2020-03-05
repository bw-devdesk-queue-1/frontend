import React, { useState } from 'react';
import { Container, Divider, Breadcrumbs, Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom";
import { postData } from '../actions'
import { connect } from 'react-redux'

const initialState = {
    title: '',
    description: '',
    tried: '',
    category: ''
}

const CreateIssue = (props) => {
    const [createIssue, setCreateIssue] = useState(initialState)

    const handleChanges = e => {
        setCreateIssue({
            ...createIssue,
            [e.target.name]: e.target.value
        })
    }

    console.log(createIssue)

    const handleSubmit = e => {
        e.preventDefault();
        props.postData(window.localStorage.getItem("id"), createIssue)
        props.history.push("/issues")
    }



    return (
        <Container>
            <Breadcrumbs>
                <Link color="inherit" component={RouterLink} to={`/`}>
                    Home
              </Link>
                <Link color="inherit" component={RouterLink} to={`/issues`}>
                    Issues
              </Link>
                <Typography color="textPrimary">New Issue</Typography>
            </Breadcrumbs>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title"></label>
                <input type="text" name="title" onChange={handleChanges} />
                <label htmlFor="description"></label>
                <input type="text" name="description" onChange={handleChanges} />
                <label htmlFor="tried"></label>
                <input type="text" name="tried" onChange={handleChanges} />
                <label htmlFor="category"></label>
                <select type="text" name="category" onChange={handleChanges}>
                    <option value="" defaultValue selected>Choose a Category</option>
                    <option value="Git">Git</option>
                    <option value="Express">Express</option>
                    <option value="React">React</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="General Javascript">General Javascript</option>
                    <option value="General Computer">General Computer</option>
                    <option value="Other">Other</option>
                </select>
                <button>Submit</button>
            </form>
        </Container>
    )
}

export default connect(null, { postData })(CreateIssue);
