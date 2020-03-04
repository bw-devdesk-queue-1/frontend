import React, { useState } from 'react';
import { Divider } from '@material-ui/core';
import axios from 'axios';
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
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title"></label>
                <input type="text" name="title" onChange={handleChanges} />
                <label htmlFor="description"></label>
                <input type="text" name="description" onChange={handleChanges} />
                <label htmlFor="tried"></label>
                <input type="text" name="tried" onChange={handleChanges} />
                <label htmlFor="category"></label>
                <input type="text" name="category" onChange={handleChanges} />
                <button>Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        issues: [...state.data, postData]
    }
}


export default connect(mapStateToProps, { postData })(CreateIssue);